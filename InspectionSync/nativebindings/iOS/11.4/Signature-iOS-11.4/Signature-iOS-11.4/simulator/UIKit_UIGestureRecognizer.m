#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIGestureRecognizer (Exports)
-(id) jsinitWithTarget: (id) target action: (NSString *) action 
{
	SEL action_ = NSSelectorFromString(action);
	id resultVal__;
	resultVal__ = [[self initWithTarget: target action: action_ ] autorelease];
	return resultVal__;
}
-(void) jsremoveTarget: (id) target action: (NSString *) action 
{
	SEL action_ = NSSelectorFromString(action);
	[self removeTarget: target action: action_ ];
}
-(void) jsaddTarget: (id) target action: (NSString *) action 
{
	SEL action_ = NSSelectorFromString(action);
	[self addTarget: target action: action_ ];
}
@end
static void addProtocols()
{
	class_addProtocol([UIGestureRecognizer class], @protocol(UIGestureRecognizerInstanceExports));
	class_addProtocol([UIGestureRecognizer class], @protocol(UIGestureRecognizerClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UIGestureRecognizerStatePossible"] = @0L;
	context[@"UIGestureRecognizerStateBegan"] = @1L;
	context[@"UIGestureRecognizerStateChanged"] = @2L;
	context[@"UIGestureRecognizerStateEnded"] = @3L;
	context[@"UIGestureRecognizerStateCancelled"] = @4L;
	context[@"UIGestureRecognizerStateFailed"] = @5L;
	context[@"UIGestureRecognizerStateRecognized"] = @3L;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void UIKit_UIGestureRecognizerProtocols()
{
	(void)@protocol(UIGestureRecognizerDelegate);
}
void load_UIKit_UIGestureRecognizer_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
