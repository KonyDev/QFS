if (strcmp(type, @encode(CGVector)) == 0) {
		CGVector argument;
		[invocation getArgument: &argument atIndex: index];
		return [JSValue valueWithCGVector: argument inContext: context];
	}