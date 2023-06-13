import { FileInputContainer, LabelTitle } from 'components/FileInput/styles';

function FileInput({ label, onChange }: IFileInputProps) {
  return (
    <FileInputContainer>
      {label && <LabelTitle data-testid="test-input-label">{label}</LabelTitle>}
      <input type="file" onChange={onChange} />
    </FileInputContainer>
  );
}

export default FileInput;
