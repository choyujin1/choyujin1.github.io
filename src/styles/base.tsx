
type Props<T> =
	T extends 'weight' ? WeightProps :
		T extends 'size' ? SizeProps :
			T extends 'color' ? ColorProps :
				T extends 'opacity' ? OpacityProps : string;

type keyProps<T> = {
	[key in Props<T>]: string;
}

/** weight */
export type WeightProps = 'w700' | 'w600' | 'w500' | 'w400'
export const weight: keyProps<'weight'> = {
	w700: '700',
	w600: '600',
	w500: '500',
	w400: '400'
};

/** size */
export type SizeProps = 's64' | 's48' | 's32' | 's28' | 's24' | 's20' | 's18' | 's16' | 's14' | 's12' | 's10' | 's8';
export const size: keyProps<'size'> = {
	s64: '64px',
	s48: '48px',
	s32: '32px',
	s28: '28px',
	s24: '24px',
	s20: '20px',
	s18: '18px',
	s16: '16px',
	s14: '14px',
	s12: '12px',
	s10: '10px',
	s8: '8px',
};


/** color */
export type ColorProps = 'primary100' | 'primary90' | 'primary80' | 'primary70' | 'primary60' | 'primary50' | 'primary40' | 'primary30' | 'primary20' | 'primary10' | 'secondary100' | 'secondary90' | 'secondary80' | 'secondary70' | 'secondary60' | 'secondary50' | 'secondary40' | 'secondary30' | 'secondary20' | 'secondary10' | 'green100' | 'green90' | 'green80' | 'green70' | 'green60' | 'green50' | 'green40' | 'green30' | 'green20' | 'green10' | 'gray10' | 'gray3C' | 'gray55' | 'gray70' | 'gray93' | 'grayA7' | 'grayC2' | 'grayD9' | 'grayED' | 'grayF8' | 'white'
export const color: keyProps<'color'> = {
	primary100: '#0740E4',
	primary90: '#2C5BEA',
	primary80: '#4F75EF',
	primary70: '#7590F4',
	primary60: '#9AB0F6',
	primary50: '#B4C3F8',
	primary40: '#CDD7FA',
	primary30: '#E5EBFC',
	primary20: '#F5F8FF',
	primary10: '#FAFBFF',
	secondary100: '#FF673E',
	secondary90: '#FF7B57',
	secondary80: '#FF9173',
	secondary70: '#FFA188',
	secondary60: '#FFA993',
	secondary50: '#FFBCAA',
	secondary40: '#FFCDC1',
	secondary30: '#FFE3DD',
	secondary20: '#FFF3F0',
	secondary10: '#FEFBFB',
	green100: '#83B100',
	green90: '#9EC236',
	green80: '#AACA4E',
	green70: '#B8D36C',
	green60: '#C3DA82',
	green50: '#CEE099',
	green40: '#D9E8B1',
	green30: '#E4EFC8',
	green20: '#F4F9E9',
	green10: '#FBFDF7',
	gray10: '#101010',
	gray3C: '#3C3C3C',
	gray55: '#555555',
	gray70: '#707070',
	gray93: '#939393',
	grayA7: '#A7A7A7',
	grayC2: '#C2C2C2',
	grayD9: '#D9D9D9',
	grayED: '#EDEDED',
	grayF8: '#F8F8F8',
	white: '#ffffff'
};


/** opacity */
export type OpacityProps = 'op100' | 'op90' | 'op80' | 'op70' | 'op60' | 'op50' | 'op40' | 'op30' | 'op20' | 'op10' | 'op5' | 'op3'
export const opacity: keyProps<'opacity'> = {
	op100: '100%',
	op90: '90%',
	op80: '80%',
	op70: '70%',
	op60: '60%',
	op50: '50%',
	op40: '40%',
	op30: '30%',
	op20: '20%',
	op10: '10%',
	op5: '5%',
	op3: '3%'
};


/** base = weight + size + color + opacity */
const base = {
	weight,
	size,
	color,
	opacity
};
export default base;