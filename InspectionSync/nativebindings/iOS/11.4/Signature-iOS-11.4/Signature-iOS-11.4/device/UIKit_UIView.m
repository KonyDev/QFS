#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIView (Exports)
-(id) jsperformSelector: (NSString *) aSelector withObject: (id) object1 withObject: (id) object2 
{
	SEL aSelector_ = NSSelectorFromString(aSelector);
	id resultVal__;
	resultVal__ = [self performSelector: aSelector_ withObject: object1 withObject: object2 ];
	return resultVal__;
}
-(id) jsperformSelector: (NSString *) aSelector withObject: (id) object 
{
	SEL aSelector_ = NSSelectorFromString(aSelector);
	id resultVal__;
	resultVal__ = [self performSelector: aSelector_ withObject: object ];
	return resultVal__;
}
-(BOOL) jsrespondsToSelector: (NSString *) aSelector 
{
	SEL aSelector_ = NSSelectorFromString(aSelector);
	BOOL resultVal__;
	resultVal__ = [self respondsToSelector: aSelector_ ];
	return resultVal__;
}
-(BOOL) jsisKindOfClass: (JSValue *) aClass 
{
	Class aClass_ = objc_getClass([[aClass[@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]);
	BOOL resultVal__;
	resultVal__ = [self isKindOfClass: aClass_ ];
	return resultVal__;
}
-(id) jsinitWithCoder: (NSCoder *) aDecoder 
{
	id resultVal__;
	resultVal__ = [[self initWithCoder: aDecoder ] autorelease];
	return resultVal__;
}
-(id) jsperformSelector: (NSString *) aSelector 
{
	SEL aSelector_ = NSSelectorFromString(aSelector);
	id resultVal__;
	resultVal__ = [self performSelector: aSelector_ ];
	return resultVal__;
}
-(BOOL) jsisMemberOfClass: (JSValue *) aClass 
{
	Class aClass_ = objc_getClass([[aClass[@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]);
	BOOL resultVal__;
	resultVal__ = [self isMemberOfClass: aClass_ ];
	return resultVal__;
}
-(id) jsinitWithFrame: (CGRect) frame 
{
	id resultVal__;
	resultVal__ = [[self initWithFrame: frame ] autorelease];
	return resultVal__;
}
+(id) jsappearanceWhenContainedIn: (JSValue *) ContainerClass arguments: (NSArray *) args 
{
	Class ContainerClass_ = objc_getClass([[ContainerClass[@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]);
	id resultVal__;
	if ([args count] == 0) resultVal__ = [self appearanceWhenContainedIn: ContainerClass_ , nil];
	else if ([args count] == 1) resultVal__ = [self appearanceWhenContainedIn: ContainerClass_ , objc_getClass([[args[0][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), nil];
	else if ([args count] == 2) resultVal__ = [self appearanceWhenContainedIn: ContainerClass_ , objc_getClass([[args[0][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[1][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), nil];
	else if ([args count] == 3) resultVal__ = [self appearanceWhenContainedIn: ContainerClass_ , objc_getClass([[args[0][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[1][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[2][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), nil];
	else if ([args count] == 4) resultVal__ = [self appearanceWhenContainedIn: ContainerClass_ , objc_getClass([[args[0][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[1][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[2][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[3][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), nil];
	else if ([args count] == 5) resultVal__ = [self appearanceWhenContainedIn: ContainerClass_ , objc_getClass([[args[0][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[1][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[2][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[3][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[4][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), nil];
	else if ([args count] == 6) resultVal__ = [self appearanceWhenContainedIn: ContainerClass_ , objc_getClass([[args[0][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[1][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[2][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[3][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[4][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[5][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), nil];
	else if ([args count] == 7) resultVal__ = [self appearanceWhenContainedIn: ContainerClass_ , objc_getClass([[args[0][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[1][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[2][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[3][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[4][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[5][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[6][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), nil];
	else if ([args count] == 8) resultVal__ = [self appearanceWhenContainedIn: ContainerClass_ , objc_getClass([[args[0][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[1][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[2][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[3][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[4][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[5][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[6][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[7][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), nil];
	else if ([args count] == 9) resultVal__ = [self appearanceWhenContainedIn: ContainerClass_ , objc_getClass([[args[0][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[1][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[2][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[3][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[4][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[5][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[6][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[7][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[8][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), nil];
	else if ([args count] >= 10) resultVal__ = [self appearanceWhenContainedIn: ContainerClass_ , objc_getClass([[args[0][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[1][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[2][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[3][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[4][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[5][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[6][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[7][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[8][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[9][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), nil];
	return resultVal__;
}
+(id) jsappearanceForTraitCollection: (UITraitCollection *) trait whenContainedIn: (JSValue *) ContainerClass arguments: (NSArray *) args 
{
	Class ContainerClass_ = objc_getClass([[ContainerClass[@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]);
	id resultVal__;
	if ([args count] == 0) resultVal__ = [self appearanceForTraitCollection: trait whenContainedIn: ContainerClass_ , nil];
	else if ([args count] == 1) resultVal__ = [self appearanceForTraitCollection: trait whenContainedIn: ContainerClass_ , objc_getClass([[args[0][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), nil];
	else if ([args count] == 2) resultVal__ = [self appearanceForTraitCollection: trait whenContainedIn: ContainerClass_ , objc_getClass([[args[0][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[1][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), nil];
	else if ([args count] == 3) resultVal__ = [self appearanceForTraitCollection: trait whenContainedIn: ContainerClass_ , objc_getClass([[args[0][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[1][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[2][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), nil];
	else if ([args count] == 4) resultVal__ = [self appearanceForTraitCollection: trait whenContainedIn: ContainerClass_ , objc_getClass([[args[0][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[1][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[2][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[3][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), nil];
	else if ([args count] == 5) resultVal__ = [self appearanceForTraitCollection: trait whenContainedIn: ContainerClass_ , objc_getClass([[args[0][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[1][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[2][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[3][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[4][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), nil];
	else if ([args count] == 6) resultVal__ = [self appearanceForTraitCollection: trait whenContainedIn: ContainerClass_ , objc_getClass([[args[0][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[1][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[2][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[3][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[4][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[5][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), nil];
	else if ([args count] == 7) resultVal__ = [self appearanceForTraitCollection: trait whenContainedIn: ContainerClass_ , objc_getClass([[args[0][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[1][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[2][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[3][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[4][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[5][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[6][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), nil];
	else if ([args count] == 8) resultVal__ = [self appearanceForTraitCollection: trait whenContainedIn: ContainerClass_ , objc_getClass([[args[0][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[1][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[2][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[3][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[4][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[5][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[6][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[7][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), nil];
	else if ([args count] == 9) resultVal__ = [self appearanceForTraitCollection: trait whenContainedIn: ContainerClass_ , objc_getClass([[args[0][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[1][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[2][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[3][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[4][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[5][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[6][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[7][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[8][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), nil];
	else if ([args count] >= 10) resultVal__ = [self appearanceForTraitCollection: trait whenContainedIn: ContainerClass_ , objc_getClass([[args[0][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[1][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[2][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[3][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[4][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[5][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[6][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[7][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[8][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[9][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), nil];
	return resultVal__;
}
-(JSValue *) getJsSuperclass
{
	return [JSValue valueWithObject: self.superclass inContext: [JSContext currentContext]];
}
@end
@implementation UIView (UIViewUIViewKeyframeAnimationsCategoryExports)
+(void) jsaddKeyframeWithRelativeStartTime: (double) frameStartTime relativeDuration: (double) frameDuration animations: (JSValue *) animations 
{
	void (^ animations_)(void) = nil;
	if (!animations.isUndefined) {
		animations_ = ^void() {
			JSContext* __jsContext = animations.context;
			NSMutableArray* parameters = [NSMutableArray array];
			callJSFunction(__jsContext, animations, self, parameters);
		};
	}
	[self addKeyframeWithRelativeStartTime: frameStartTime relativeDuration: frameDuration animations: animations_ ];
}
+(void) jsanimateKeyframesWithDuration: (NSTimeInterval) duration delay: (NSTimeInterval) delay options: (UIViewKeyframeAnimationOptions) options animations: (JSValue *) animations completion: (JSValue *) completion 
{
	void (^ animations_)(void) = nil;
	if (!animations.isUndefined) {
		animations_ = ^void() {
			JSContext* __jsContext = animations.context;
			NSMutableArray* parameters = [NSMutableArray array];
			callJSFunction(__jsContext, animations, self, parameters);
		};
	}
	void (^ completion_)(BOOL) = nil;
	if (!completion.isUndefined) {
		completion_ = ^void(BOOL arg0) {
			JSContext* __jsContext = completion.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: [JSValue valueWithObject: @(arg0) inContext: __jsContext]];
			callJSFunction(__jsContext, completion, self, parameters);
		};
	}
	[self animateKeyframesWithDuration: duration delay: delay options: options animations: animations_ completion: completion_ ];
}
@end
@implementation UIView (UIViewUIViewAnimationWithBlocksCategoryExports)
+(void) jstransitionFromView: (UIView *) fromView toView: (UIView *) toView duration: (NSTimeInterval) duration options: (UIViewAnimationOptions) options completion: (JSValue *) completion 
{
	void (^ completion_)(BOOL) = nil;
	if (!completion.isUndefined) {
		completion_ = ^void(BOOL arg0) {
			JSContext* __jsContext = completion.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: [JSValue valueWithObject: @(arg0) inContext: __jsContext]];
			callJSFunction(__jsContext, completion, self, parameters);
		};
	}
	[self transitionFromView: fromView toView: toView duration: duration options: options completion: completion_ ];
}
+(void) jsanimateWithDuration: (NSTimeInterval) duration delay: (NSTimeInterval) delay options: (UIViewAnimationOptions) options animations: (JSValue *) animations completion: (JSValue *) completion 
{
	void (^ animations_)(void) = nil;
	if (!animations.isUndefined) {
		animations_ = ^void() {
			JSContext* __jsContext = animations.context;
			NSMutableArray* parameters = [NSMutableArray array];
			callJSFunction(__jsContext, animations, self, parameters);
		};
	}
	void (^ completion_)(BOOL) = nil;
	if (!completion.isUndefined) {
		completion_ = ^void(BOOL arg0) {
			JSContext* __jsContext = completion.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: [JSValue valueWithObject: @(arg0) inContext: __jsContext]];
			callJSFunction(__jsContext, completion, self, parameters);
		};
	}
	[self animateWithDuration: duration delay: delay options: options animations: animations_ completion: completion_ ];
}
+(void) jstransitionWithView: (UIView *) view duration: (NSTimeInterval) duration options: (UIViewAnimationOptions) options animations: (JSValue *) animations completion: (JSValue *) completion 
{
	void (^ animations_)(void) = nil;
	if (!animations.isUndefined) {
		animations_ = ^void() {
			JSContext* __jsContext = animations.context;
			NSMutableArray* parameters = [NSMutableArray array];
			callJSFunction(__jsContext, animations, self, parameters);
		};
	}
	void (^ completion_)(BOOL) = nil;
	if (!completion.isUndefined) {
		completion_ = ^void(BOOL arg0) {
			JSContext* __jsContext = completion.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: [JSValue valueWithObject: @(arg0) inContext: __jsContext]];
			callJSFunction(__jsContext, completion, self, parameters);
		};
	}
	[self transitionWithView: view duration: duration options: options animations: animations_ completion: completion_ ];
}
+(void) jsanimateWithDuration: (NSTimeInterval) duration animations: (JSValue *) animations 
{
	void (^ animations_)(void) = nil;
	if (!animations.isUndefined) {
		animations_ = ^void() {
			JSContext* __jsContext = animations.context;
			NSMutableArray* parameters = [NSMutableArray array];
			callJSFunction(__jsContext, animations, self, parameters);
		};
	}
	[self animateWithDuration: duration animations: animations_ ];
}
+(void) jsperformSystemAnimation: (UISystemAnimation) animation onViews: (NSArray *) views options: (UIViewAnimationOptions) options animations: (JSValue *) parallelAnimations completion: (JSValue *) completion 
{
	void (^ parallelAnimations_)(void) = nil;
	if (!parallelAnimations.isUndefined) {
		parallelAnimations_ = ^void() {
			JSContext* __jsContext = parallelAnimations.context;
			NSMutableArray* parameters = [NSMutableArray array];
			callJSFunction(__jsContext, parallelAnimations, self, parameters);
		};
	}
	void (^ completion_)(BOOL) = nil;
	if (!completion.isUndefined) {
		completion_ = ^void(BOOL arg0) {
			JSContext* __jsContext = completion.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: [JSValue valueWithObject: @(arg0) inContext: __jsContext]];
			callJSFunction(__jsContext, completion, self, parameters);
		};
	}
	[self performSystemAnimation: animation onViews: views options: options animations: parallelAnimations_ completion: completion_ ];
}
+(void) jsanimateWithDuration: (NSTimeInterval) duration animations: (JSValue *) animations completion: (JSValue *) completion 
{
	void (^ animations_)(void) = nil;
	if (!animations.isUndefined) {
		animations_ = ^void() {
			JSContext* __jsContext = animations.context;
			NSMutableArray* parameters = [NSMutableArray array];
			callJSFunction(__jsContext, animations, self, parameters);
		};
	}
	void (^ completion_)(BOOL) = nil;
	if (!completion.isUndefined) {
		completion_ = ^void(BOOL arg0) {
			JSContext* __jsContext = completion.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: [JSValue valueWithObject: @(arg0) inContext: __jsContext]];
			callJSFunction(__jsContext, completion, self, parameters);
		};
	}
	[self animateWithDuration: duration animations: animations_ completion: completion_ ];
}
+(void) jsanimateWithDuration: (NSTimeInterval) duration delay: (NSTimeInterval) delay usingSpringWithDamping: (CGFloat) dampingRatio initialSpringVelocity: (CGFloat) velocity options: (UIViewAnimationOptions) options animations: (JSValue *) animations completion: (JSValue *) completion 
{
	void (^ animations_)(void) = nil;
	if (!animations.isUndefined) {
		animations_ = ^void() {
			JSContext* __jsContext = animations.context;
			NSMutableArray* parameters = [NSMutableArray array];
			callJSFunction(__jsContext, animations, self, parameters);
		};
	}
	void (^ completion_)(BOOL) = nil;
	if (!completion.isUndefined) {
		completion_ = ^void(BOOL arg0) {
			JSContext* __jsContext = completion.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: [JSValue valueWithObject: @(arg0) inContext: __jsContext]];
			callJSFunction(__jsContext, completion, self, parameters);
		};
	}
	[self animateWithDuration: duration delay: delay usingSpringWithDamping: dampingRatio initialSpringVelocity: velocity options: options animations: animations_ completion: completion_ ];
}
@end
@implementation UIView (UIViewUIViewAnimationCategoryExports)
+(void) jsperformWithoutAnimation: (JSValue *) actionsWithoutAnimation 
{
	void (^ actionsWithoutAnimation_)(void) = nil;
	if (!actionsWithoutAnimation.isUndefined) {
		actionsWithoutAnimation_ = ^void() {
			JSContext* __jsContext = actionsWithoutAnimation.context;
			NSMutableArray* parameters = [NSMutableArray array];
			callJSFunction(__jsContext, actionsWithoutAnimation, self, parameters);
		};
	}
	[self performWithoutAnimation: actionsWithoutAnimation_ ];
}
+(void) jssetAnimationDidStopSelector: (NSString *) selector 
{
	SEL selector_ = NSSelectorFromString(selector);
	[self setAnimationDidStopSelector: selector_ ];
}
+(void) jssetAnimationWillStartSelector: (NSString *) selector 
{
	SEL selector_ = NSSelectorFromString(selector);
	[self setAnimationWillStartSelector: selector_ ];
}
@end
static void addProtocols()
{
	class_addProtocol([UIView class], @protocol(UIViewUIConstraintBasedLayoutInstallingConstraintsCategoryInstanceExports));
	class_addProtocol([UIView class], @protocol(UIViewUIConstraintBasedLayoutInstallingConstraintsCategoryClassExports));
	class_addProtocol([UIView class], @protocol(UIViewInstanceExports));
	class_addProtocol([UIView class], @protocol(UIViewClassExports));
	class_addProtocol([UIView class], @protocol(UIViewUILayoutGuideSupportCategoryInstanceExports));
	class_addProtocol([UIView class], @protocol(UIViewUILayoutGuideSupportCategoryClassExports));
	class_addProtocol([UIView class], @protocol(UIViewUIViewKeyframeAnimationsCategoryInstanceExports));
	class_addProtocol([UIView class], @protocol(UIViewUIViewKeyframeAnimationsCategoryClassExports));
	class_addProtocol([UIView class], @protocol(UIViewUIViewAnimationWithBlocksCategoryInstanceExports));
	class_addProtocol([UIView class], @protocol(UIViewUIViewAnimationWithBlocksCategoryClassExports));
	class_addProtocol([UIView class], @protocol(UIViewUIConstraintBasedLayoutLayeringCategoryInstanceExports));
	class_addProtocol([UIView class], @protocol(UIViewUIConstraintBasedLayoutLayeringCategoryClassExports));
	class_addProtocol([UILayoutGuide class], @protocol(UILayoutGuideUIConstraintBasedLayoutDebuggingCategoryInstanceExports));
	class_addProtocol([UILayoutGuide class], @protocol(UILayoutGuideUIConstraintBasedLayoutDebuggingCategoryClassExports));
	class_addProtocol([UIView class], @protocol(UIViewUIViewLayoutConstraintCreationCategoryInstanceExports));
	class_addProtocol([UIView class], @protocol(UIViewUIViewLayoutConstraintCreationCategoryClassExports));
	class_addProtocol([UIView class], @protocol(UIViewUIConstraintBasedCompatibilityCategoryInstanceExports));
	class_addProtocol([UIView class], @protocol(UIViewUIConstraintBasedCompatibilityCategoryClassExports));
	class_addProtocol([UIView class], @protocol(UIViewUIConstraintBasedLayoutDebuggingCategoryInstanceExports));
	class_addProtocol([UIView class], @protocol(UIViewUIConstraintBasedLayoutDebuggingCategoryClassExports));
	class_addProtocol([UIView class], @protocol(UIViewUIViewGeometryCategoryInstanceExports));
	class_addProtocol([UIView class], @protocol(UIViewUIViewGeometryCategoryClassExports));
	class_addProtocol([UIView class], @protocol(UIViewUIViewRenderingCategoryInstanceExports));
	class_addProtocol([UIView class], @protocol(UIViewUIViewRenderingCategoryClassExports));
	class_addProtocol([UIView class], @protocol(UIViewUIViewHierarchyCategoryInstanceExports));
	class_addProtocol([UIView class], @protocol(UIViewUIViewHierarchyCategoryClassExports));
	class_addProtocol([UIView class], @protocol(UIViewUIConstraintBasedLayoutCoreMethodsCategoryInstanceExports));
	class_addProtocol([UIView class], @protocol(UIViewUIConstraintBasedLayoutCoreMethodsCategoryClassExports));
	class_addProtocol([UIView class], @protocol(UIViewUIStateRestorationCategoryInstanceExports));
	class_addProtocol([UIView class], @protocol(UIViewUIStateRestorationCategoryClassExports));
	class_addProtocol([UIView class], @protocol(UIViewUIConstraintBasedLayoutFittingSizeCategoryInstanceExports));
	class_addProtocol([UIView class], @protocol(UIViewUIConstraintBasedLayoutFittingSizeCategoryClassExports));
	class_addProtocol([UIView class], @protocol(UIViewUIViewMotionEffectsCategoryInstanceExports));
	class_addProtocol([UIView class], @protocol(UIViewUIViewMotionEffectsCategoryClassExports));
	class_addProtocol([UIView class], @protocol(UIViewUIViewGestureRecognizersCategoryInstanceExports));
	class_addProtocol([UIView class], @protocol(UIViewUIViewGestureRecognizersCategoryClassExports));
	class_addProtocol([UIView class], @protocol(UIViewUISnapshottingCategoryInstanceExports));
	class_addProtocol([UIView class], @protocol(UIViewUISnapshottingCategoryClassExports));
	class_addProtocol([UIView class], @protocol(UIViewUIViewAnimationCategoryInstanceExports));
	class_addProtocol([UIView class], @protocol(UIViewUIViewAnimationCategoryClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UIViewAnimationCurveEaseInOut"] = @0;
	context[@"UIViewAnimationCurveEaseIn"] = @1;
	context[@"UIViewAnimationCurveEaseOut"] = @2;
	context[@"UIViewAnimationCurveLinear"] = @3;

	context[@"UIViewContentModeScaleToFill"] = @0;
	context[@"UIViewContentModeScaleAspectFit"] = @1;
	context[@"UIViewContentModeScaleAspectFill"] = @2;
	context[@"UIViewContentModeRedraw"] = @3;
	context[@"UIViewContentModeCenter"] = @4;
	context[@"UIViewContentModeTop"] = @5;
	context[@"UIViewContentModeBottom"] = @6;
	context[@"UIViewContentModeLeft"] = @7;
	context[@"UIViewContentModeRight"] = @8;
	context[@"UIViewContentModeTopLeft"] = @9;
	context[@"UIViewContentModeTopRight"] = @10;
	context[@"UIViewContentModeBottomLeft"] = @11;
	context[@"UIViewContentModeBottomRight"] = @12;

	context[@"UIViewAnimationTransitionNone"] = @0;
	context[@"UIViewAnimationTransitionFlipFromLeft"] = @1;
	context[@"UIViewAnimationTransitionFlipFromRight"] = @2;
	context[@"UIViewAnimationTransitionCurlUp"] = @3;
	context[@"UIViewAnimationTransitionCurlDown"] = @4;

	context[@"UIViewAutoresizingNone"] = @0U;
	context[@"UIViewAutoresizingFlexibleLeftMargin"] = @1U;
	context[@"UIViewAutoresizingFlexibleWidth"] = @2U;
	context[@"UIViewAutoresizingFlexibleRightMargin"] = @4U;
	context[@"UIViewAutoresizingFlexibleTopMargin"] = @8U;
	context[@"UIViewAutoresizingFlexibleHeight"] = @16U;
	context[@"UIViewAutoresizingFlexibleBottomMargin"] = @32U;

	context[@"UIViewAnimationOptionLayoutSubviews"] = @1U;
	context[@"UIViewAnimationOptionAllowUserInteraction"] = @2U;
	context[@"UIViewAnimationOptionBeginFromCurrentState"] = @4U;
	context[@"UIViewAnimationOptionRepeat"] = @8U;
	context[@"UIViewAnimationOptionAutoreverse"] = @16U;
	context[@"UIViewAnimationOptionOverrideInheritedDuration"] = @32U;
	context[@"UIViewAnimationOptionOverrideInheritedCurve"] = @64U;
	context[@"UIViewAnimationOptionAllowAnimatedContent"] = @128U;
	context[@"UIViewAnimationOptionShowHideTransitionViews"] = @256U;
	context[@"UIViewAnimationOptionOverrideInheritedOptions"] = @512U;
	context[@"UIViewAnimationOptionCurveEaseInOut"] = @0U;
	context[@"UIViewAnimationOptionCurveEaseIn"] = @65536U;
	context[@"UIViewAnimationOptionCurveEaseOut"] = @131072U;
	context[@"UIViewAnimationOptionCurveLinear"] = @196608U;
	context[@"UIViewAnimationOptionTransitionNone"] = @0U;
	context[@"UIViewAnimationOptionTransitionFlipFromLeft"] = @1048576U;
	context[@"UIViewAnimationOptionTransitionFlipFromRight"] = @2097152U;
	context[@"UIViewAnimationOptionTransitionCurlUp"] = @3145728U;
	context[@"UIViewAnimationOptionTransitionCurlDown"] = @4194304U;
	context[@"UIViewAnimationOptionTransitionCrossDissolve"] = @5242880U;
	context[@"UIViewAnimationOptionTransitionFlipFromTop"] = @6291456U;
	context[@"UIViewAnimationOptionTransitionFlipFromBottom"] = @7340032U;
	context[@"UIViewAnimationOptionPreferredFramesPerSecondDefault"] = @0U;
	context[@"UIViewAnimationOptionPreferredFramesPerSecond60"] = @50331648U;
	context[@"UIViewAnimationOptionPreferredFramesPerSecond30"] = @117440512U;

	context[@"UIViewKeyframeAnimationOptionLayoutSubviews"] = @1U;
	context[@"UIViewKeyframeAnimationOptionAllowUserInteraction"] = @2U;
	context[@"UIViewKeyframeAnimationOptionBeginFromCurrentState"] = @4U;
	context[@"UIViewKeyframeAnimationOptionRepeat"] = @8U;
	context[@"UIViewKeyframeAnimationOptionAutoreverse"] = @16U;
	context[@"UIViewKeyframeAnimationOptionOverrideInheritedDuration"] = @32U;
	context[@"UIViewKeyframeAnimationOptionOverrideInheritedOptions"] = @512U;
	context[@"UIViewKeyframeAnimationOptionCalculationModeLinear"] = @0U;
	context[@"UIViewKeyframeAnimationOptionCalculationModeDiscrete"] = @1024U;
	context[@"UIViewKeyframeAnimationOptionCalculationModePaced"] = @2048U;
	context[@"UIViewKeyframeAnimationOptionCalculationModeCubic"] = @3072U;
	context[@"UIViewKeyframeAnimationOptionCalculationModeCubicPaced"] = @4096U;

	context[@"UISystemAnimationDelete"] = @0U;

	context[@"UIViewTintAdjustmentModeAutomatic"] = @0;
	context[@"UIViewTintAdjustmentModeNormal"] = @1;
	context[@"UIViewTintAdjustmentModeDimmed"] = @2;

	context[@"UISemanticContentAttributeUnspecified"] = @0;
	context[@"UISemanticContentAttributePlayback"] = @1;
	context[@"UISemanticContentAttributeSpatial"] = @2;
	context[@"UISemanticContentAttributeForceLeftToRight"] = @3;
	context[@"UISemanticContentAttributeForceRightToLeft"] = @4;

	context[@"UILayoutConstraintAxisHorizontal"] = @0;
	context[@"UILayoutConstraintAxisVertical"] = @1;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &UILayoutFittingExpandedSize;
	if (p != NULL) context[@"UILayoutFittingExpandedSize"] = [JSValue valueWithSize: UILayoutFittingExpandedSize inContext: context];
	p = (void*) &UILayoutFittingCompressedSize;
	if (p != NULL) context[@"UILayoutFittingCompressedSize"] = [JSValue valueWithSize: UILayoutFittingCompressedSize inContext: context];
	p = (void*) &UIViewNoIntrinsicMetric;
	if (p != NULL) context[@"UIViewNoIntrinsicMetric"] = @(UIViewNoIntrinsicMetric);
}
void UIKit_UIViewProtocols()
{
	(void)@protocol(UICoordinateSpace);
}
void load_UIKit_UIView_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
