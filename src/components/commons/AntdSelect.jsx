import { Select } from "antd";
const { Option } = Select;

const AntdSelect = (props) => {
  return (
    <Select
      value={props.value}
      onChange={props.onChange}
      placeholder="Select a service"
      className={`!h-12 ${props.className}`}
      style={{ width: 200 }}
    >
      {props.options.map((option) => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </Select>
  );
};
export default AntdSelect;
