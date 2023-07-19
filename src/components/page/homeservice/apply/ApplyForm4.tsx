import React, { useState } from "react";
import Input from "@components/origin/control/input/Input";
import Checkbox from "@components/origin/control/check/Checkbox";
import {ApplyForm1Variables} from "@components/page/homeservice/apply/ApplyForm1";
import {ApplyForm2Variables} from "@components/page/homeservice/apply/ApplyForm2";
import {ApplyForm3Variables} from "@components/page/homeservice/apply/ApplyForm3";

export interface ApplyForm4Variables
	extends ApplyForm1Variables, ApplyForm2Variables, ApplyForm3Variables {
	nominee_cd: string;
	nominee_name: string;
	nominee_hphone: string;
	nominee_address_road: string;
	nominee_address_jibun: string;
	nominee_address_post: string;
	nominee_address: string;
	nominee_reduction_joint: string;
	business_address: string;
	business_address_road: string;
	business_address_jibun: string;
	business_address_post: string;
	business_email: string;
	business_name: string;
	business_number: string;
}

interface Props {
	form: ApplyForm4Variables
	setForm: React.Dispatch<React.SetStateAction<ApplyForm4Variables>>;
	setInput: (e: React.ChangeEvent) => void
	setCheckbox: (e: React.ChangeEvent) => void
}
const ApplyStep4 = ({
	form,
	setForm,
	setInput,
	setCheckbox
}: Props) => {

	const {
		customer_name,
		customer_hphone,
		nominee_cd,
		nominee_name,
		nominee_hphone,
		nominee_address_road,
		nominee_address_jibun,
		nominee_address_post,
		nominee_address,
		nominee_reduction_joint,
		business_email,
		business_name,
		business_number,
		business_address,
		business_address_road,
		business_address_jibun,
		business_address_post,
	} = form

	const [checkAll, setCheckAll] = useState(false);
	const [addressCheckAll, setAddressCheckAll] = useState(false);

	return (
		<>
			<p>명의자 정보를 입력해 주세요</p>

			<Checkbox
				id={'checkAll'}
				label={'신청자와 동일'}
				checked={checkAll}
				name="checkAll"
				setCheckbox={(e: React.ChangeEvent<HTMLInputElement>) => {
					const { checked } = e.target as HTMLInputElement;
					setCheckAll(!checkAll);

					if(checked){
						setForm({
							...form,
							nominee_name: customer_name,
							nominee_hphone: customer_hphone
						})
					}
				}}
			/>

			<Input
				name={"nominee_name"}
				value={nominee_name}
				setInput={(e: React.ChangeEvent<HTMLInputElement>) => {
					setInput(e);
					setCheckAll(false);
				}}
				placeholder={'이름'}
			/>
			<Input
				name={"nominee_hphone"}
				value={nominee_hphone}
				setInput={(e: React.ChangeEvent<HTMLInputElement>) => {
					setInput(e);
					setCheckAll(false);
				}}
				placeholder={'휴대전화 번호'}
			/>
			<Input
				name={"nominee_address"}
				value={nominee_address}
				setInput={setInput}
				placeholder={'주소(전체)'}
			/>
			<Input
				name={"nominee_address_road"}
				value={nominee_address_road}
				setInput={setInput}
				placeholder={'주소 - 도로명'}
			/>
			<Input
				name={"nominee_address_jibun"}
				value={nominee_address_jibun}
				setInput={setInput}
				placeholder={'주소 - 지번'}
			/>
			<Input
				name={"nominee_address_post"}
				value={nominee_address_post}
				setInput={setInput}
				placeholder={'주소 - 우편번호'}
			/>

			{nominee_cd === 'solo' && (
				<>
					<Input
						name={"business_name"}
						value={business_name}
						setInput={setInput}
						placeholder={'사업장명'}
					/>

					<Checkbox
						id={'addressCheckAll'}
						label={'주민등록주소와 동일'}
						checked={addressCheckAll}
						name="addressCheckAll"
						setCheckbox={(e: React.ChangeEvent<HTMLInputElement>) => {
							const { checked } = e.target as HTMLInputElement;
							setAddressCheckAll(!addressCheckAll);

							if(checked){
								setForm({
									...form,
									business_address: nominee_address_road,
									business_address_road: nominee_address_jibun,
									business_address_jibun: nominee_address_post,
									business_address_post: nominee_address,
								})
							}
						}}
					/>
					<Input
						name={"business_address"}
						value={business_address}
						setInput={(e: React.ChangeEvent<HTMLInputElement>) => {
							setInput(e);
							setAddressCheckAll(false);
						}}
						placeholder={'사업장 주소(전체)'}
					/>
					<Input
						name={"business_address_road"}
						value={business_address_road}
						setInput={(e: React.ChangeEvent<HTMLInputElement>) => {
							setInput(e);
							setAddressCheckAll(false);
						}}
						placeholder={'사업장 주소 - 도로명'}
					/>
					<Input
						name={"business_address_jibun"}
						value={business_address_jibun}
						setInput={(e: React.ChangeEvent<HTMLInputElement>) => {
							setInput(e);
							setAddressCheckAll(false);
						}}
						placeholder={'사업장 주소 - 지번'}
					/>
					<Input
						name={"business_address_post"}
						value={business_address_post}
						setInput={(e: React.ChangeEvent<HTMLInputElement>) => {
							setInput(e);
							setAddressCheckAll(false);
						}}
						placeholder={'사업장 주소 - 우편번호'}
					/>
					<Input
						name={"business_number"}
						value={business_number}
						setInput={setInput}
						placeholder={'사업자 등록정보'}
					/>
					<Input
						name={"business_email"}
						value={business_email}
						setInput={setInput}
						placeholder={'세금계산서 발행 이메일 주소'}
					/>
				</>
			)}

			{nominee_cd === 'legal' && (
				<>
					<Input
						name={"business_name"}
						value={business_name}
						setInput={setInput}
						placeholder={'법인명'}
					/>
					<Input
						name={"business_number"}
						value={business_number}
						setInput={setInput}
						placeholder={'사업자 등록정보'}
					/>
					<Input
						name={"business_email"}
						value={business_email}
						setInput={setInput}
						placeholder={'세금계산서 발행 이메일 주소'}
					/>
				</>
			)}

			<Checkbox
				id={'nominee_reduction_joint'}
				label={'공동명의를 원해요'}
				name={'nominee_reduction_joint'}
				value={nominee_reduction_joint}
				setCheckbox={setCheckbox}
			/>

		</>
	);
}

export default ApplyStep4;