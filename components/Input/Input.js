import React from 'react';
import './Input.scss';

// es6 desctructuring, and giving default value props
export default function Input({
	label = 'Label',
	placeholder = 'Placeholder',
	value = '',
	helperText = '',
	handleChange = null,
	error,
	disabled = null,
	startIcon,
	endIcon,
	fullWidth,
	size = 'md',
	multiline,
	row = 1,
	...props
}) {
	let inputClasses = error ? `input-error` : ``;
	let labelClasses = error ? `label-error` : ``;
	inputClasses = `${inputClasses} size--${size}`;
	if (fullWidth) {
		inputClasses = `${inputClasses} full-width`;
	}
	if (startIcon) {
		inputClasses = `${inputClasses} icon--${startIcon}--start`;
	}
	if (endIcon) {
		inputClasses = `${inputClasses} icon--${endIcon}--end`;
	}

	return (
		<label className={labelClasses}>
			{label}
			{!multiline ? (
				<input
					className={inputClasses}
					type="text"
					placeholder={placeholder}
					disabled={disabled}
					onChange={e => {
						if (handleChange) {
							handleChange(e.target.value);
						}
					}}
					defau={value}
					{...props}
				/>
			) : (
				// move the textArea into it's own component
				// TextArea
				<textarea
					className={inputClasses}
					type="text"
					placeholder={placeholder}
					disabled={disabled}
					onChange={e => {
						if (handleChange) {
							return handleChange(e.target.value);
						}
					}}
					defaultValue={value}
					rows={row}
					{...props}
				/>
			)}
			{helperText && <span className={'text-small'}>{helperText}</span>}
		</label>
	);
}
