if (strcmp(type, @encode(CGVector)) == 0) {
		CGVector returnValue = value.toCGVector;
		[invocation setReturnValue: &returnValue];
	}