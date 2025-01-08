import { ReactElement } from "react";
import {
  Control,
  Controller,
  FieldPath,
  FieldPathValue,
  FieldValues,
  Path,
  RefCallBack,
} from "react-hook-form";

interface FieldAdapterProps<T extends FieldValues, U extends FieldPath<T>> {
  name: U;
  control: Control<T>;
  render: (props: {
    value: FieldPathValue<T, U>;
    onChange: (...event: any[]) => void;
    onBlur: () => void;
    ref: RefCallBack;
    name: Path<T>;
    isValid: boolean;
    error?: string;
  }) => ReactElement;
}

export function FieldAdapter<T extends FieldValues, U extends FieldPath<T>>({
  name,
  control,
  render,
}: FieldAdapterProps<T, U>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) =>
        render({
          ...field,
          onChange: (e) => {
            // 기본 onChange 메서드에 onBlur 메세드를 같이 호출하도록 해두었습니다.
            //
            // field.onBlur()는 실제 blur 이벤트가 아닌 validation 트리거용 메서드입니다. (rhf의 mode가 blur일때)
            //
            // 일반 controlled input/textarea는
            // value, onChange, onBlur가 정상적으로 연결이 가능하지만
            //
            // 태그인풋/이미지업로드 등의 커스텀 컴포넌트에서
            // 특정한 행동에 onChange를 활용해 값을 업데이트할때에는
            // onBlur를 실행하지 못해서, onChange가 호출될때 함께 onBlur가 호출되도록 개선했습니다.
            //
            // (정상적으로 연결되는 컴포넌트에서도 한번더 벨리데이션을 호출한다고 해서 문제가 되지 않을것 같아서)
            field.onChange(e);
            field.onBlur();
          },
          isValid: !fieldState.invalid,
          error: fieldState.error?.message,
        })
      }
    />
  );
}
