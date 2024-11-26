import Button from "@/components/Button";
import Container from "@/components/Container";
import Input from "@/components/Input";
import TagsInput from "@/components/TagsInput";
import Section from "@/components/Section";
import useForm from "@/hooks/useForm";
import FileInput from "@/components/FileInput";

const formSchema = {
  images: {
    value: undefined,
    // rule: {
    //   required: "이미지를 업로드해주세요",
    // },
  },
  tags: {
    value: "",
    rule: {
      required: "태그를 입력해주세요",
      patterns: [
        {
          regex: /^[^!@#$%^&*(),.?":{}|<>_\-+=\[\]\\\/`~';]*$/,
          message: "특수문자는 사용할 수 없습니다.",
        },
      ],
    },
  },
  name: {
    value: "",
    rule: {
      required: "상품명을 입력해주세요",
    },
  },
  description: {
    value: "",
    rule: {
      required: "상품소개를 입력해주세요",
    },
  },
  price: {
    value: 0,
    rule: {
      required: "판매 가격을 입력해주세요",
      patterns: [
        {
          regex: /^[0-9]*$/,
          message: "숫자만 입력해주세요",
        },
      ],
    },
  },
};

export default function ItemAdd() {
  const { register, isFormValid, handleChange, handleSubmit } =
    useForm(formSchema);

  function onSubmit(data) {
    const formattedData = {
      ...data,
      images: data.images && [data.images],
      tags: data.tags.split(" "),
    };
    console.log(formattedData);
  }

  return (
    <Container>
      <Section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Section.Header title="상품 등록하기">
            <Button type="submit" size="sm" disabled={!isFormValid}>
              등록
            </Button>
          </Section.Header>
          <Section.Content>
            <FileInput
              label="상품 이미지"
              {...register("images")}
              onChange={handleChange}
            />
            <Input
              type="text"
              label="상품명"
              placeholder="상품명 입력해주세요"
              {...register("name")}
            />
            <Input
              as="textarea"
              label="상품명"
              placeholder="상품명 입력해주세요"
              {...register("description")}
            />
            <Input
              type="number"
              label="판매 가격"
              placeholder="판매 가격을 입력해주세요"
              {...register("price")}
            />
            <TagsInput
              label="태그"
              placeholder="태그를 입력해주세요"
              {...register("tags")}
              onChange={handleChange}
            />
          </Section.Content>
        </form>
      </Section>
    </Container>
  );
}
