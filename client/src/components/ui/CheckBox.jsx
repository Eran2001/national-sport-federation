const Checkbox = ({ label, checked, onChange }) => (
  <label className="inline-flex items-center space-x-2">
    <input
      type="checkbox"
      className="form-checkbox h-5 w-5 text-blue-600"
      checked={checked}
      onChange={onChange}
    />
    <span>{label}</span>
  </label>
);

export default Checkbox;
