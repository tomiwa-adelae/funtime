"use client";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from "@/components/ui/input-otp";

const LettersInput = () => {
	return (
		<div className="w-full flex items-center justify-center">
			<InputOTP maxLength={7} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
				<InputOTPGroup>
					<InputOTPSlot className="input-circle" index={0} />

					<InputOTPSlot index={1} />
					<InputOTPSlot className="input-circle" index={2} />
					<InputOTPSlot index={3} />
					<InputOTPSlot className="input-circle" index={4} />
					<InputOTPSlot index={5} />
					<InputOTPSlot className="input-circle" index={6} />
				</InputOTPGroup>
			</InputOTP>
		</div>
	);
};

export default LettersInput;
