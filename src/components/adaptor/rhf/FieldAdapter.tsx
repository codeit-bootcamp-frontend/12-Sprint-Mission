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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
            // rhf mode가 onBlur모드일때 벨리데이션하려면 필요 (trigger가 onblur에 되는듯함)
            // 일반적으로 레스트파라미터로 각 input, textarea에 자동적으로 onblur가 들어가서 괜찮으나
            // 특수하게 커스텀 컴포넌트를 이용해서 수동으로 업데이트할경우(onchange활용하여) onBlur를 해줘야 벨리데이션이 됨
            // (useForm의 리턴값중에 setValue를 통해서 업데이트하면 벨리데이션이 됨)
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
