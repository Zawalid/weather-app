import { Option } from './Option';

export function Options({ options }) {
    return (
        <div className='flex justify-between gap-2 rounded-2xl bg-settings-inactive p-1'>
            {options.map((option) => (
                <Option key={option} option={option} />
            ))}
        </div>
    );
}
