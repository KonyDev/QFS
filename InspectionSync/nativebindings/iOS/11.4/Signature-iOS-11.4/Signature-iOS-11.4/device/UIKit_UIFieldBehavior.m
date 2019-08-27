#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIFieldBehavior (Exports)
+(id) jsfieldWithEvaluationBlock: (JSValue *) block 
{
	CGVector (^ block_)(UIFieldBehavior * , CGPoint, CGVector, CGFloat, CGFloat, NSTimeInterval) = nil;
	if (!block.isUndefined) {
		block_ = ^CGVector(UIFieldBehavior * arg0, CGPoint arg1, CGVector arg2, CGFloat arg3, CGFloat arg4, NSTimeInterval arg5) {
			JSContext* __jsContext = block.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: (arg0 ? [JSValue valueWithObject: arg0 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			[parameters addObject: [JSValue valueWithPoint: arg1 inContext: __jsContext]];
			[parameters addObject: [JSValue valueWithCGVector: arg2 inContext: __jsContext]];
			[parameters addObject: [JSValue valueWithObject: @(arg3) inContext: __jsContext]];
			[parameters addObject: [JSValue valueWithObject: @(arg4) inContext: __jsContext]];
			[parameters addObject: [JSValue valueWithObject: @(arg5) inContext: __jsContext]];
			JSValue* result = callJSFunction(__jsContext, block, self, parameters);
			return [result toCGVector];
		};
	}
	id resultVal__;
	resultVal__ = [self fieldWithEvaluationBlock: block_ ];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([UIFieldBehavior class], @protocol(UIFieldBehaviorInstanceExports));
	class_addProtocol([UIFieldBehavior class], @protocol(UIFieldBehaviorClassExports));
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
void load_UIKit_UIFieldBehavior_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
