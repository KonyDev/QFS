if (strcmp(type, @encode(UIEdgeInsets)) == 0) {
		UIEdgeInsets argument;
		[invocation getArgument: &argument atIndex: index];
		return [JSValue valueWithUIEdgeInsets: argument inContext: context];
	} else if (strcmp(type, @encode(UIOffset)) == 0) {
		UIOffset argument;
		[invocation getArgument: &argument atIndex: index];
		return [JSValue valueWithUIOffset: argument inContext: context];
	} else if (strcmp(type, @encode(NSDirectionalEdgeInsets)) == 0) {
		NSDirectionalEdgeInsets argument;
		[invocation getArgument: &argument atIndex: index];
		return [JSValue valueWithNSDirectionalEdgeInsets: argument inContext: context];
	}