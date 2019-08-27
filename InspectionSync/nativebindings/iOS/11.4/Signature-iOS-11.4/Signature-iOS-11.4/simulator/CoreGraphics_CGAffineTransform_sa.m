if (strcmp(type, @encode(CGAffineTransform)) == 0) {
		CGAffineTransform argument;
		[invocation getArgument: &argument atIndex: index];
		return [JSValue valueWithCGAffineTransform: argument inContext: context];
	}