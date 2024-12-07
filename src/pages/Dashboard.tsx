import React, { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import Button from '../components/ui/dashboard/Button';
import Modal from '../components/ui/dashboard/modals/Modal';
import ListItem from '../components/ui/dashboard/list/ListItem';
import TextLeft from '../components/ui/dashboard/list/svgs/TextLeft';
import TextLeftTwo from '../components/ui/dashboard/list/svgs/TextLeftTwo';
import RadioIcon from '../components/ui/dashboard/list/svgs/RadioIcon';
import CaretCircleDown from '../components/ui/dashboard/list/svgs/CaretCircleDown';
import Hash from '../components/ui/dashboard/list/svgs/Hash';
import Input from '../components/ui/dashboard/form/Input';
import InputCard from '../components/ui/dashboard/form/InputCard';
import PlusIcon from '../components/ui/dashboard/list/svgs/PlusIcon';
import FieldModalContent from '../components/ui/dashboard/form/FieldModalContent';
import { Field, FormComponent, } from '../utils/types';
import Dropdown from '../components/ui/dashboard/form/DropDown';
import RadioGroup from '../components/ui/dashboard/form/RadioGroup';



function App() {
    const [modalState, setModalState] = useState<{ [key: string]: boolean }>({
        modal1: false,
        modal2: false,
        modal3: false,
        modal4: false,
    });
    const [fields, setFields] = useState<Field[]>([]);
    const [form, setForm] = useState<Field[]>([]);
    const [currentFieldType, setCurrentFieldType] = useState<FormComponent | null>(null);
    const [currentModal, setCurrentModal] = useState<string>("none");

    const [errors, setErrors] = useState({
        textInput: "",
        dropdown: "",
        options: {},
    });

    const validateForm = (): boolean => {
        const newErrors: {
            textInput: string;
            dropdown: string;
            options: Record<number, string>;
        } = {
            textInput: "",
            dropdown: "",
            options: {},
        };


        let isValid = true;

        fields.forEach((field) => {
            if (!field.label.trim()) {
                isValid = false;
                newErrors.textInput = "Field label is required.";
            }
            const optionLabels = new Set();

            field.options?.forEach((option) => {
                if (!option.label.trim()) {
                    isValid = false;
                    newErrors.options[option.id] = "Option label is required.";
                }

                if (optionLabels.has(option.label.trim())) {
                    isValid = false;
                    newErrors.options[option.id] = "Duplicate option label.";
                } else {
                    optionLabels.add(option.label.trim());
                }
            });
        });

        setErrors(newErrors);
        return isValid;
    };

    const capitalizeString = (str:string):string => {
        if (str && typeof str === 'string') {
          return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        }
        return str;
      };
      


    const openModal = (modalKey: string) => {
        setModalState((prev) => ({ ...prev, [modalKey]: true }));
        setCurrentModal(modalKey)
    };

    const closeModal = (modalKey: string) => {
        setModalState((prev) => ({ ...prev, [modalKey]: false }));
    };

    const inputChange = (id: number, value: any) => {
        setForm((prevFields) =>
            prevFields.map((field) =>
                field.id === id ? { ...field, "value": value } : field
            )
        );
    };

    const dropdownChange = (id: number, value: any) => {
        console.log(id, value)
        setForm((prevFields) =>
            prevFields.map((field) =>
                field.id === id ? { ...field, "value": value } : field
            )
        );
    };
    const radioChange = (id: number, value: any) => {
        console.log(id, value)
        setForm((prevFields) =>
            prevFields.map((field) =>
                field.id === id ? { ...field, "value": value } : field
            )
        );
    };

    const addComponent = (id: number, modalKey?: string) => {
        if (!validateForm()) {
            return;
        }
        const field = fields.find((field) => field.id === id);
        if (field) {
            setForm((prev) => {
                const lastField = prev[prev.length - 1];
                const newField = { ...field, id: lastField ? lastField.id + 1 : 1 };
                return [...prev, newField];
            });
        }
        if (modalKey) {
            setModalState((prev) => ({ ...prev, [modalKey]: false }));
        }

        setFields([]);
        setCurrentFieldType(null);
    }
    const openSpecificModal = (modalKey: string, type?: FormComponent) => {
        setModalState((prev) => {
            const newState = Object.keys(prev).reduce((acc, key) => {
                acc[key] = key === modalKey;
                return acc;
            }, {} as { [key: string]: boolean });

            return newState;
        });
        setCurrentModal(modalKey);

        if (type) {
            setCurrentFieldType(type);
            addField(type)
        }
    };

    const closeSpecificModal = (modalKey: string, type?: FormComponent) => {
        setModalState((prev) => ({ ...prev, [modalKey]: false }));
        setModalState((prev) => ({ ...prev, modal1: true }));
        if (type) {
            setFields(fields.filter(field => field.type !== type));
        }
        setFields([]);
        setCurrentFieldType(null);
    };
    const closeSpecificModalOnly = (modalKey: string, type?: FormComponent) => {
        setModalState((prev) => ({ ...prev, [modalKey]: false }));
        if (type) {
            setFields(fields.filter(field => field.type !== type));
        }
        setFields([]);
        setCurrentFieldType(null);
    };

    const getTypeFromModal = (modal: string): FormComponent => {
        if (modal === "modal2") {
            return "text-input";
        }
        if (modal === "modal3") {
            return 'dropdown';
        }

        if (modal === "modal4") {
            return 'radio-input';
        }

        return "none";
    }

    const addField = (type: FormComponent) => {
        const newField: Field = {
            id: fields.length + 1,
            type,
            label: '',
            value: "",
            required: false,
            options: type === 'radio-input' || type === 'dropdown' ? [{ id: 1, value: '', label: "" }, { id: 2, value: '', label: "" }] : [],
        };
        setFields([...fields, newField]);

    };

    const updateField = (id: number, updatedField: Partial<Field>) => {
        setFields(fields.map(field => (field.id === id ? { ...field, ...updatedField } : field)));
    };

    const removeForm = (id: number) => {
        console.log(id)
        setForm(form.filter(field => field.id !== id));
    };

    const addOption = (fieldId: number) => {
        setFields(fields.map(field => {
            if (field.id === fieldId && (field.type === 'radio-input' || field.type === 'dropdown')) {
                const newOption = { id: field.options!.length + 1, value: '', label: "" };
                return { ...field, options: [...field.options!, newOption] };
            }
            return field;
        }));
    };

    const removeOption = (fieldId: number, optionId: number) => {
        setFields(fields.map(field => {
            if (field.id === fieldId && (field.type === 'radio-input' || field.type === 'dropdown')) {
                return { ...field, options: field.options!.filter(option => option.id !== optionId) };
            }
            return field;
        }));
    };
    return (
        <DashboardLayout>
            <div className='h-full overflow-y-auto flex flex-col justify-center items-center'>
                {form.length < 1 && <> <div className="w-full mx-auto max-w-[400px]">
                    <div>
                        <div className="mb-6 md:mb-6 space-y-2">
                            <figure className="h-20 w-20 mb-5 rounded-full bg-gray-two mx-auto">
                            </figure>
                            <h2 className="text-center font-bold text-black text-lg sm:text-[20px] lg:text-[20px] ">No custom forms have been <br /> created yet</h2>
                            <span className="block text-center text-sm text-gray-text max-w-[320px] mt-2 mx-auto">It seems you haven't created any forms yet. Start by adding a form item to collect the information you need!</span>
                        </div>
                    </div>
                    <Button className='mt-0 text-white' onClick={() => openModal('modal1')} title='Create Your First Form' />
                </div>
                </>}
                {form.length > 0 && <><div className={`w-full mx-auto max-w-[550px] flex-col h-[80vh] flex gap-5 ${form.length > 3 ? "" : "justify-center"}`}>
                    {form.map(field => {

                        return (
                            <InputCard title={field.label} type={`${field.type.replace('-', ' ').toLocaleUpperCase()}`} action={() => removeForm(field.id)}>
                                {field.type === "text-input" && <Input name={field.label} placeholder={field.label} type='text' value={field.value} onChange={(e) => inputChange(field.id, e.target.value)} />}
                                {field.type === "dropdown" && <Dropdown name={field.label} value={field.value} onChange={(e) => dropdownChange(field.id, e)} placeholder={field.label} options={field.options || [{ id: 1, label: "", value: "" }]} />}
                                {field.type === "radio-input" && <RadioGroup id={field.id} name={field.label} value={field.value} onChange={(e) => radioChange(field.id, e)} options={field.options || [{ id: 1, label: "", value: "" }]} />}
                            </InputCard>
                        )
                    }
                    )}
                    <Button className='mt-0 w-full bg-white py-4 border border-gray-border text-blue-btn' onClick={() => openModal('modal1')} title='Add new option' svg={<PlusIcon />} />
                </div>
                </>}
            </div>

            <Modal isOpen={modalState.modal1} hasFooter={false} onClose={() => closeModal('modal1')} title="Add a Form Component">
                <div className="my-3 divide-y divide-gray-border">
                    <ListItem title="Text Input" description="Ask Basic Questions to gather text data" action={() => openSpecificModal("modal2", 'text-input')} background='#55001F1A' svg={<TextLeft />} />
                    <ListItem title="Number Input" description="Use to get basic numerical data" background='#3320981A' svg={<Hash />} />
                    <ListItem title="Dropdown" description="Collect predefined choices" action={() => openSpecificModal("modal3", 'dropdown')} background='#BF06371A' svg={<CaretCircleDown />} />
                    <ListItem title="Radio Input" description="Select single-choice options" action={() => openSpecificModal("modal3", 'radio-input')} background='#D8F3E9' svg={<RadioIcon />} />
                    <ListItem title="Text area" description="Use to get detailed text responses" background='#F355081A' svg={<TextLeftTwo />} />
                </div>
            </Modal>
            <Modal
                isOpen={modalState.modal2 || modalState.modal3 || modalState.modal4}
                hasFooter={true}
                action={() => fields[0] ? addComponent(fields[0].id, currentModal) : false}
                onClose={() => closeSpecificModalOnly(currentModal, getTypeFromModal(currentModal))}
                backAction={() => closeSpecificModal(currentModal, getTypeFromModal(currentModal))}
                title={`Add ${capitalizeString(currentFieldType?.replace('-', ' ') || "") || 'Field'} Details`}
            >
                <FieldModalContent
                    fields={fields}
                    updateField={updateField}
                    addOption={addOption}
                    removeOption={removeOption}
                    errors={errors}
                />
            </Modal>

        </DashboardLayout>
    );
}

export default App;
