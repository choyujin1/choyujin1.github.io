"use client"
import type { NextPage } from "next";
import React, { useMemo, useState } from 'react';
import { handleInput } from "@libs/client/useInput"
import { handleStepper } from "@libs/client/useStepper"
import { validation } from "@libs/client/utils"
import Layout from "@components/origin/layout/Layout";
import Stepper from "@components/origin/stepper/Stepper";
import ApplyForm1 from "@components/page/homeservice/apply/ApplyForm1";
import ApplyForm2 from "@components/page/homeservice/apply/ApplyForm2";
import ApplyForm3 from "@components/page/homeservice/apply/ApplyForm3";
import ApplyForm4 from "@components/page/homeservice/apply/ApplyForm4";

const Apply: NextPage = () => {

	const [activeStep, setActiveStep] = useState<number>(0);
	const { setPrev, setNext } = handleStepper(activeStep, setActiveStep);

	const [form, setForm] = useState<any>({
		payment_cd: '', // 지불 유형
		customer_name: '', // 신청자 이름
		customer_hphone: '', // 신청자 휴대전화 번호
		customer_certify: '', // 인증번호
		customer_certify_confirm: false, // 인증번호
		nominee_cd: '', // 명의자(공통) 유형
		nominee_name: '', // 명의자(공통) 이름
		nominee_hphone: '', // 명의자(공통) 번호
		nominee_address: '', // 명의자(공통) 전체 주소
		nominee_address_road: '', // 명의자(공통) 주소
		nominee_address_jibun: '', // 명의자(공통) 주소
		nominee_address_post: '', // 명의자 (공통)주소
		nominee_reduction_joint: '', // 명의자(공통) 공동 명의
		business_name: '', // 사업자(법인, 개인) 이름
		business_email: '', // 사업자(법인, 개인) 이메일
		business_number: '', // 사업자(법인, 개인) 번호
		business_address: '', // 사업자(개인) 전체 주소
		business_address_road: '', // 사업자(개인) 주소
		business_address_jibun: '', // 사업자(개인) 주소
		business_address_post: '', // 사업자(개인) 주소
	});
	const { setInput, setCheckbox, setRadio } = handleInput(form, setForm);

	const canNextMode = useMemo(function () {
		let next = false;

		if (activeStep === 0) {
			next = validation('default', form.payment_cd).ok;
		}

		if (activeStep === 1) {
			next =
				validation('name', form.customer_name).ok &&
				validation('phone', form.customer_hphone).ok &&
				validation('boolean', form.customer_certify_confirm).ok;
		}

		if (activeStep === 2) {
			next = validation('default', form.nominee_cd).ok;
		}

		if (activeStep === 3) {
			next =
				validation('default', form.nominee_name).ok &&
				validation('default', form.nominee_hphone).ok &&
				validation('default', form.nominee_address).ok &&
				validation('default', form.nominee_address_road).ok &&
				validation('default', form.nominee_address_jibun).ok &&
				validation('default', form.nominee_address_post).ok;

			if(form.nominee_cd !== 'personal'){
				next =
					validation('default', form.business_name).ok &&
					validation('default', form.business_email).ok &&
					validation('default', form.business_number).ok;

				if(form.nominee_cd === 'solo'){
					next =
						validation('default', form.business_address).ok &&
						validation('default', form.business_address_road).ok &&
						validation('default', form.business_address_jibun).ok &&
						validation('default', form.business_address_post).ok ;
				}
			}
		}

		return next;
	}, [form, activeStep])



	const stepContents = [
		<>
			<ApplyForm1 form={form} setRadio={setRadio} />
			<button onClick={setNext} disabled={!canNextMode}>다음</button>
		</>,
		<>
			<ApplyForm2 form={form} setInput={setInput} setForm={setForm} />
			<button onClick={setPrev}>이전</button>
			<button onClick={setNext} disabled={!canNextMode}>다음</button>
		</>,
		<>
			<ApplyForm3 form={form} setRadio={setRadio} />
			<button onClick={setPrev}>이전</button>
			<button onClick={setNext} disabled={!canNextMode}>다음</button>
		</>,
		<>
			<ApplyForm4 form={form} setForm={setForm} setInput={setInput} setCheckbox={setCheckbox} />
			<button onClick={setPrev}>이전</button>
			<button onClick={() => alert('신청 fetch!')} disabled={!canNextMode}>신청하기</button>
		</>
	]

	return (
		<>
			<Layout title={"홈서비스 신청"}>
				<Stepper
					activeStep={activeStep}
					stepContents={stepContents}
				/>
			</Layout>
		</>
	);
}

export default Apply;







