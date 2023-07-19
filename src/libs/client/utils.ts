export function cls(...classnames: string[]) {
  return classnames.join(" ");
}

export function validation(type: string, value: string | boolean){
	let message = '';
	let ok = true;

	switch(type){
		case "name" :
			message = nameValid(value).message;
			ok = nameValid(value).ok;
			break;
		case "phone" :
			message = phoneValid(value).message;
			ok = phoneValid(value).ok;
			break;
		case "boolean" :
            message = booleanValid(value).message;
            ok = booleanValid(value).ok;
            break;
		default :
			message = defaultValid(value).message;
			ok = defaultValid(value).ok;
			break;
	}

	return { ok, message };

	function defaultValid(value: string){
		if(!value){
			message = '값을 입력해주세요.';
			ok = false;
		}

		return {
			ok, message
		};
	}

	function booleanValid(value: boolean){
		message = String(value);
        ok = value;

        return {
            ok, message
        };
    }

	function phoneValid(value: string){
		const regExp = /^010\d{4}\d{4}$/; // 010 으로 시작 -> 중간자리 4자리, 11 글자 최대
		const test = regExp.test(value);

		if(!value){
			message = '휴대전화 번호를 입력해주세요.';
			ok = false;
		}else if(!test){
			message = '휴대전화 번호를 정확히 입력해주세요.';
			ok = false;
		}

		return {
			ok, message
		};
	}

	function nameValid(value: string){
		if(!value){
			message = '이름을 입력해주세요.';
			ok = false;
		}

		return {
			ok, message
		};
	}

	function certificationValid(value: string | number){

		return {
			ok, message
		};
	}

}