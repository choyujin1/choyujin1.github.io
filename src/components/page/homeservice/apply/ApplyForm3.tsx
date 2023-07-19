import React from "react";
import Radio from "@components/origin/control/radio/Radio";

export interface ApplyForm3Variables {
	nominee_cd: string;
}

interface Props {
	form: ApplyForm3Variables
	setRadio: (e: React.ChangeEvent) => void
}
const ApplyStep3 = ({
	form,
	setRadio
}: Props) => {

	const { nominee_cd } = form

	return (
		<>
			<p>명의자 유형을 선택해 주세요</p>
			<Radio
				id={'personal'}
				label={'개인'}
				name={'nominee_cd'}
				value={'personal'}
				setRadio={setRadio}
				checked={nominee_cd === 'personal'}
			/>
			<Radio
				id={'solo'}
				label={'개인사업자'}
				name={'nominee_cd'}
				value={'solo'}
				setRadio={setRadio}
				checked={nominee_cd === 'solo'}
			/>
			<Radio
				id={'legal'}
				label={'법인사업자'}
				name={'nominee_cd'}
				value={'legal'}
				setRadio={setRadio}
				checked={nominee_cd === 'legal'}
			/>
		</>
	);
}

export default ApplyStep3;