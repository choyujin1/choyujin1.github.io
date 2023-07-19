import React, {useMemo, useState} from "react";
import { validation } from "@libs/client/utils"
import Input from "@components/origin/control/input/Input";

export interface ApplyForm2Variables {
	customer_name: string;
	customer_hphone: string;
	customer_certify: string;
	customer_certify_confirm: boolean;
}

interface Props {
	form: ApplyForm2Variables
	setForm: React.Dispatch<React.SetStateAction<ApplyForm2Variables>>;
	setInput: (e: React.ChangeEvent) => void
}
const ApplyStep2 = ({
	form,
	setForm,
	setInput,
}: Props) => {

	const { customer_name, customer_hphone, customer_certify, customer_certify_confirm } = form

	const [send, setSend] = useState<boolean>(false);

	const handleSend = () => {
		setSend(true);

		setForm({
			...form,
			customer_certify: '',
			customer_certify_confirm: false
		})

		alert('인증번호 전송');
	}

	const handleConfirm= (number: string) => {
		if(number === '000000'){
			setForm({
				...form,
				customer_certify_confirm: true
			})
			alert('인증성공');
		}else{
			setForm({
				...form,
				customer_certify_confirm: false
			})
			alert('인증실패');
		}
	}


	return (
		<>
			<p>신청자 정보를 입력하세요</p>

			<Input
				name={"customer_name"}
				value={customer_name}
				setInput={setInput}
				placeholder={'신청자 이름'}
			/>

			<div>
				<Input
					name={"customer_hphone"}
					value={customer_hphone}
					setInput={setInput}
					placeholder={'신청자 휴대전화 번호'}
				/>
				<button
					type={'button'}
					disabled={!validation('phone', customer_hphone).ok}
					onClick={handleSend}
				>
					인증번호 전송
				</button>
				<Input
					name={"customer_certify"}
					value={customer_certify}
					setInput={setInput}
					placeholder={'인증번호'}
					disabled={!send || customer_certify_confirm}
				/>
				<button
					type={'button'}
					disabled={!validation('default', customer_certify).ok || customer_certify_confirm}
					onClick={() => handleConfirm(customer_certify)}
				>
					인증번호 확인
				</button>
			</div>
			<div>인증결과: {customer_certify_confirm ? 'true' : 'false'}</div>
		</>
	);
}

export default ApplyStep2;