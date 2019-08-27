if (strcmp(type, @encode(CATransform3D)) == 0) {
		CATransform3D argument;
		[invocation getArgument: &argument atIndex: index];
		return [JSValue valueWithCATransform3D: argument inContext: context];
	}