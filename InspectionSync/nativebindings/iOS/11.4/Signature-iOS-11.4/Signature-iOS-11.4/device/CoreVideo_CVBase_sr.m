if (strcmp(type, @encode(CVSMPTETime)) == 0) {
		CVSMPTETime returnValue = value.toCVSMPTETime;
		[invocation setReturnValue: &returnValue];
	} else if (strcmp(type, @encode(CVTimeStamp)) == 0) {
		CVTimeStamp returnValue = value.toCVTimeStamp;
		[invocation setReturnValue: &returnValue];
	} else if (strcmp(type, @encode(CVTime)) == 0) {
		CVTime returnValue = value.toCVTime;
		[invocation setReturnValue: &returnValue];
	}