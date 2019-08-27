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
	context[@"UIViewAnimationCurveEaseInOut"] = @0L;
	context[@"UIViewAnimationCurveEaseIn"] = @1L;
	context[@"UIViewAnimationCurveEaseOut"] = @2L;
	context[@"UIViewAnimationCurveLinear"] = @3L;

	context[@"UIViewContentModeScaleToFill"] = @0L;
	context[@"UIViewContentModeScaleAspectFit"] = @1L;
	context[@"UIViewContentModeScaleAspectFill"] = @2L;
	context[@"UIViewContentModeRedraw"] = @3L;
	context[@"UIViewContentModeCenter"] = @4L;
	context[@"UIViewContentModeTop"] = @5L;
	context[@"UIViewContentModeBottom"] = @6L;
	context[@"UIViewContentModeLeft"] = @7L;
	context[@"UIViewContentModeRight"] = @8L;
	context[@"UIViewContentModeTopLeft"] = @9L;
	context[@"UIViewContentModeTopRight"] = @10L;
	context[@"UIViewContentModeBottomLeft"] = @11L;
	context[@"UIViewContentModeBottomRight"] = @12L;

	context[@"UIViewAnimationTransitionNone"] = @0L;
	context[@"UIViewAnimationTransitionFlipFromLeft"] = @1L;
	context[@"UIViewAnimationTransitionFlipFromRight"] = @2L;
	context[@"UIViewAnimationTransitionCurlUp"] = @3L;
	context[@"UIViewAnimationTransitionCurlDown"] = @4L;

	context[@"UIViewAutoresizingNone"] = @0UL;
	context[@"UIViewAutoresizingFlexibleLeftMargin"] = @1UL;
	context[@"UIViewAutoresizingFlexibleWidth"] = @2UL;
	context[@"UIViewAutoresizingFlexibleRightMargin"] = @4UL;
	context[@"UIViewAutoresizingFlexibleTopMargin"] = @8UL;
	context[@"UIViewAutoresizingFlexibleHeight"] = @16UL;
	context[@"UIViewAutoresizingFlexibleBottomMargin"] = @32UL;

	context[@"UIViewAnimationOptionLayoutSubviews"] = @1UL;
	context[@"UIViewAnimationOptionAllowUserInteraction"] = @2UL;
	context[@"UIViewAnimationOptionBeginFromCurrentState"] = @4UL;
	context[@"UIViewAnimationOptionRepeat"] = @8UL;
	context[@"UIViewAnimationOptionAutoreverse"] = @16UL;
	context[@"UIViewAnimationOptionOverrideInheritedDuration"] = @32UL;
	context[@"UIViewAnimationOptionOverrideInheritedCurve"] = @64UL;
	context[@"UIViewAnimationOptionAllowAnimatedContent"] = @128UL;
	context[@"UIViewAnimationOptionShowHideTransitionViews"] = @256UL;
	context[@"UIViewAnimationOptionOverrideInheritedOptions"] = @512UL;
	context[@"UIViewAnimationOptionCurveEaseInOut"] = @0UL;
	context[@"UIViewAnimationOptionCurveEaseIn"] = @65536UL;
	context[@"UIViewAnimationOptionCurveEaseOut"] = @131072UL;
	context[@"UIViewAnimationOptionCurveLinear"] = @196608UL;
	context[@"UIViewAnimationOptionTransitionNone"] = @0UL;
	context[@"UIViewAnimationOptionTransitionFlipFromLeft"] = @1048576UL;
	context[@"UIViewAnimationOptionTransitionFlipFromRight"] = @2097152UL;
	context[@"UIViewAnimationOptionTransitionCurlUp"] = @3145728UL;
	context[@"UIViewAnimationOptionTransitionCurlDown"] = @4194304UL;
	context[@"UIViewAnimationOptionTransitionCrossDissolve"] = @5242880UL;
	context[@"UIViewAnimationOptionTransitionFlipFromTop"] = @6291456UL;
	context[@"UIViewAnimationOptionTransitionFlipFromBottom"] = @7340032UL;
	context[@"UIViewAnimationOptionPreferredFramesPerSecondDefault"] = @0UL;
	context[@"UIViewAnimationOptionPreferredFramesPerSecond60"] = @50331648UL;
	context[@"UIViewAnimationOptionPreferredFramesPerSecond30"] = @117440512UL;

	context[@"UIViewKeyframeAnimationOptionLayoutSubviews"] = @1UL;
	context[@"UIViewKeyframeAnimationOptionAllowUserInteraction"] = @2UL;
	context[@"UIViewKeyframeAnimationOptionBeginFromCurrentState"] = @4UL;
	context[@"UIViewKeyframeAnimationOptionRepeat"] = @8UL;
	context[@"UIViewKeyframeAnimationOptionAutoreverse"] = @16UL;
	context[@"UIViewKeyframeAnimationOptionOverrideInheritedDuration"] = @32UL;
	context[@"UIViewKeyframeAnimationOptionOverrideInheritedOptions"] = @512UL;
	context[@"UIViewKeyframeAnimationOptionCalculationModeLinear"] = @0UL;
	context[@"UIViewKeyframeAnimationOptionCalculationModeDiscrete"] = @1024UL;
	context[@"UIViewKeyframeAnimationOptionCalculationModePaced"] = @2048UL;
	context[@"UIViewKeyframeAnimationOptionCalculationModeCubic"] = @3072UL;
	context[@"UIViewKeyframeAnimationOptionCalculationModeCubicPaced"] = @4096UL;

	context[@"UISystemAnimationDelete"] = @0UL;

	context[@"UIViewTintAdjustmentModeAutomatic"] = @0L;
	context[@"UIViewTintAdjustmentModeNormal"] = @1L;
	context[@"UIViewTintAdjustmentModeDimmed"] = @2L;

	context[@"UISemanticContentAttributeUnspecified"] = @0L;
	context[@"UISemanticContentAttributePlayback"] = @1L;
	context[@"UISemanticContentAttributeSpatial"] = @2L;
	context[@"UISemanticContentAttributeForceLeftToRight"] = @3L;
	context[@"UISemanticContentAttributeForceRightToLeft"] = @4L;

	context[@"UILayoutConstraintAxisHorizontal"] = @0L;
	context[@"UILayoutConstraintAxisVertical"] = @1L;

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
