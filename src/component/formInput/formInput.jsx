import { FormInputLabel, Input, Group, ErrorMessage } from "./formInput.style";
const FormInput = ({ label, error, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel
          shrink={Boolean(
            otherProps.value &&
              typeof otherProps.value === "string" &&
              otherProps.value.length
          )}
        >
          {label}
        </FormInputLabel>
      )}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Group>
  );
};

export default FormInput;
