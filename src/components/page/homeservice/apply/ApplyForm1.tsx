import React from "react";
import Radio from "@components/origin/control/radio/Radio";

export interface ApplyForm1Variables {
	payment_cd: string;
}

interface Props {
	form: ApplyForm1Variables
	setRadio: (e: React.ChangeEvent) => void
}
const ApplyStep1 = ({
   form,
   setRadio
}: Props) => {
	const { payment_cd } = form

	return (
		<>
			<p>결제수단을 선택해주세요</p>
			<Radio
				id={'cash'}
				label={'현금'}
				name={'payment_cd'}
				value={'cash'}
				setRadio={setRadio}
				checked={payment_cd === 'cash'}
			/>
			<Radio
				id={'complex'}
				label={'현금 + 할부'}
				name={'payment_cd'}
				value={'complex'}
				setRadio={setRadio}
				checked={payment_cd === 'complex'}
			/>
		</>
	);
}

export default ApplyStep1;