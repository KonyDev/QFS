if (strcmp(type, @encode(CVSMPTETime)) == 0) {
		CVSMPTETime argument;
		[invocation getArgument: &argument atIndex: index];
		return [JSValue valueWithCVSMPTETime: argument inContext: context];
	} else if (strcmp(type, @encode(CVTimeStamp)) == 0) {
		CVTimeStamp argument;
		[invocation getArgument: &argument atIndex: index];
		return [JSValue valueWithCVTimeStamp: argument inContext: context];
	} else if (strcmp(type, @encode(CVTime)) == 0) {
		CVTime argument;
		[invocation getArgument: &argument atIndex: index];
		return [JSValue valueWithCVTime: argument inContext: context];
	}