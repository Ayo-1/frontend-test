import React, { useMemo } from 'react';
import Input from './Input';
import { Field } from '../../../../utils/types';
import RequiredSwitch from './RequiredSwitch';
import PlusIcon from '../list/svgs/PlusIcon';


interface ModalProps {
  fields: Field[];
  updateField: (id: number, updatedField: Partial<Field>) => void;
  addOption: (fieldId: number) => void;
  removeOption: (fieldId: number, optionId: number) => void;
  errors: {
    textInput: string;
    dropdown: string;
    options: Record<number, string>;
  }
}

const FieldModalContent: React.FC<ModalProps> = ({ fields, updateField, addOption, removeOption, errors }) => (

  <div>
    {useMemo(() => fields.map((field) => (
      <div key={field.id}>
        <div className="my-2 mb-3">
          <Input
            name="Label"
            placeholder="Label"
            type="text"
            value={field.label}
            onChange={(e) => updateField(field.id, { label: e.target.value })}
          />
          {errors.textInput && <p className="text-red-error text-xs mt-1.5">{errors.textInput}</p>}
        </div>

        {(field.type === "radio-input" || field.type === "dropdown") && (
          <div>
            {field.type === "dropdown" && (
              <p className="font-semibold text-md mt-2 mb-3">Dropdown Options</p>
            )}
            {field.type === "radio-input" && (
              <p className="font-semibold text-md mt-2 mb-3"> Options</p>
            )}
            {field.options?.map((option) => (
              <div className='mb-4' key={option.id}>
                <Input
                  name={`Option `}
                  placeholder={`Option`}
                  type="text"
                  action={option.id > 2 ? () => removeOption(field.id, option.id) : undefined}
                  value={option.label}
                  onChange={(e) =>
                    updateField(field.id, {
                      options: field.options?.map((o) =>
                        o.id === option.id ? { ...o, label: e.target.value } : o
                      ),
                    })
                  }
                />
                {errors.options[option.id] && (
                  <p className="text-red-error text-xs mt-1.5">{errors.options[option.id]}</p>
                )}
              </div>
            ))}
            <button
              onClick={() => addOption(field.id)}
              className="px-0 py-2 text-blue-btn flex gap-1 text-sm items-center rounded"
            >
              <PlusIcon />
              Add Option
            </button>
          </div>
        )}

        <RequiredSwitch title="Require customers to fill this field" checked={field.required} id={field.id} action={() => updateField(field.id, { required: !field.required })} />

      </div>
    )), [fields, updateField, addOption, removeOption, errors])}
  </div>
);

export default FieldModalContent;
