if (strcmp(type, @encode(UIFloatRange)) == 0) {
		UIFloatRange argument;
		[invocation getArgument: &argument atIndex: index];
		return [JSValue valueWithUIFloatRange: argument inContext: context];
	}