#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIViewPropertyAnimator (Exports)
-(id) jsinitWithDuration: (NSTimeInterval) duration controlPoint1: (CGPoint) point1 controlPoint2: (CGPoint) point2 animations: (JSValue *) animations 
{
	void (^ animations_)(void) = nil;
	if (!animations.isUndefined) {
		animations_ = ^void() {
			JSContext* __jsContext = animations.context;
			NSMutableArray* parameters = [NSMutableArray array];
			callJSFunction(__jsContext, animations, self, parameters);
		};
	}
	id resultVal__;
	resultVal__ = [[self initWithDuration: duration controlPoint1: point1 controlPoint2: point2 animations: animations_ ] autorelease];
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
-(void) jsaddAnimations: (JSValue *) animation 
{
	void (^ animation_)(void) = nil;
	if (!animation.isUndefined) {
		animation_ = ^void() {
			JSContext* __jsContext = animation.context;
			NSMutableArray* parameters = [NSMutableArray array];
			callJSFunction(__jsContext, animation, self, parameters);
		};
	}
	[self addAnimations: animation_ ];
}
-(id) jsperformSelector: (NSString *) aSelector withObject: (id) object1 withObject: (id) object2 
{
	SEL aSelector_ = NSSelectorFromString(aSelector);
	id resultVal__;
	resultVal__ = [self performSelector: aSelector_ withObject: object1 withObject: object2 ];
	return resultVal__;
}
-(id) jsperformSelector: (NSString *) aSelector 
{
	SEL aSelector_ = NSSelectorFromString(aSelector);
	id resultVal__;
	resultVal__ = [self performSelector: aSelector_ ];
	return resultVal__;
}
-(id) jsinitWithDuration: (NSTimeInterval) duration dampingRatio: (CGFloat) ratio animations: (JSValue *) animations 
{
	void (^ animations_)(void) = nil;
	if (!animations.isUndefined) {
		animations_ = ^void() {
			JSContext* __jsContext = animations.context;
			NSMutableArray* parameters = [NSMutableArray array];
			callJSFunction(__jsContext, animations, self, parameters);
		};
	}
	id resultVal__;
	resultVal__ = [[self initWithDuration: duration dampingRatio: ratio animations: animations_ ] autorelease];
	return resultVal__;
}
-(void) jsaddAnimations: (JSValue *) animation delayFactor: (CGFloat) delayFactor 
{
	void (^ animation_)(void) = nil;
	if (!animation.isUndefined) {
		animation_ = ^void() {
			JSContext* __jsContext = animation.context;
			NSMutableArray* parameters = [NSMutableArray array];
			callJSFunction(__jsContext, animation, self, parameters);
		};
	}
	[self addAnimations: animation_ delayFactor: delayFactor ];
}
-(BOOL) jsisMemberOfClass: (JSValue *) aClass 
{
	Class aClass_ = objc_getClass([[aClass[@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]);
	BOOL resultVal__;
	resultVal__ = [self isMemberOfClass: aClass_ ];
	return resultVal__;
}
-(id) jsinitWithDuration: (NSTimeInterval) duration curve: (UIViewAnimationCurve) curve animations: (JSValue *) animations 
{
	void (^ animations_)(void) = nil;
	if (!animations.isUndefined) {
		animations_ = ^void() {
			JSContext* __jsContext = animations.context;
			NSMutableArray* parameters = [NSMutableArray array];
			callJSFunction(__jsContext, animations, self, parameters);
		};
	}
	id resultVal__;
	resultVal__ = [[self initWithDuration: duration curve: curve animations: animations_ ] autorelease];
	return resultVal__;
}
-(void) jsaddCompletion: (JSValue *) completion 
{
	void (^ completion_)(UIViewAnimatingPosition) = nil;
	if (!completion.isUndefined) {
		completion_ = ^void(UIViewAnimatingPosition arg0) {
			JSContext* __jsContext = completion.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: [JSValue valueWithObject: @(arg0) inContext: __jsContext]];
			callJSFunction(__jsContext, completion, self, parameters);
		};
	}
	[self addCompletion: completion_ ];
}
-(id) jsinitWithDuration: (NSTimeInterval) duration timingParameters: (id) parameters 
{
	id resultVal__;
	resultVal__ = [[self initWithDuration: duration timingParameters: parameters ] autorelease];
	return resultVal__;
}
+(id) jsrunningPropertyAnimatorWithDuration: (NSTimeInterval) duration delay: (NSTimeInterval) delay options: (UIViewAnimationOptions) options animations: (JSValue *) animations completion: (JSValue *) completion 
{
	void (^ animations_)(void) = nil;
	if (!animations.isUndefined) {
		animations_ = ^void() {
			JSContext* __jsContext = animations.context;
			NSMutableArray* parameters = [NSMutableArray array];
			callJSFunction(__jsContext, animations, self, parameters);
		};
	}
	void (^ completion_)(UIViewAnimatingPosition) = nil;
	if (!completion.isUndefined) {
		completion_ = ^void(UIViewAnimatingPosition arg0) {
			JSContext* __jsContext = completion.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: [JSValue valueWithObject: @(arg0) inContext: __jsContext]];
			callJSFunction(__jsContext, completion, self, parameters);
		};
	}
	id resultVal__;
	resultVal__ = [self runningPropertyAnimatorWithDuration: duration delay: delay options: options animations: animations_ completion: completion_ ];
	return resultVal__;
}
-(JSValue *) getJsSuperclass
{
	return [JSValue valueWithObject: self.superclass inContext: [JSContext currentContext]];
}
@end
static void addProtocols()
{
	class_addProtocol([UIViewPropertyAnimator class], @protocol(UIViewPropertyAnimatorInstanceExports));
	class_addProtocol([UIViewPropertyAnimator class], @protocol(UIViewPropertyAnimatorClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_UIKit_UIViewPropertyAnimator_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
