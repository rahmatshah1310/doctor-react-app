import { DatePicker } from "antd";
import { useState } from "react";

const AntdDatePicker = ({ onChange, format = "YYYY-MM-DD" }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="w-full">
      <DatePicker
        onChange={onChange}
        format={format}
        suffixIcon={null} 
        className="!w-full !border !border-[var(--gray-text)] !rounded !p-2 hover:!border-[var(--primary-color)] focus:!border-[var(--primary-color)]"
        popupClassName="font-roboto"
      />
      {selectedDate && (
        <p className="mt-2 text-sm text-[var(--gray-text)]">
          Selected: {selectedDate}
        </p>
      )}
    </div>
  );
};

export default AntdDatePicker;
