#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation CATransaction (Exports)
+(void) jssetCompletionBlock: (JSValue *) block 
{
	void (^ block_)(void) = nil;
	if (!block.isUndefined) {
		block_ = ^void() {
			JSContext* __jsContext = block.context;
			NSMutableArray* parameters = [NSMutableArray array];
			callJSFunction(__jsContext, block, self, parameters);
		};
	}
	[self setCompletionBlock: block_ ];
}
@end
static void addProtocols()
{
	class_addProtocol([CATransaction class], @protocol(CATransactionInstanceExports));
	class_addProtocol([CATransaction class], @protocol(CATransactionClassExports));
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
	p = (void*) &kCATransactionDisableActions;
	if (p != NULL) context[@"kCATransactionDisableActions"] = kCATransactionDisableActions;
	p = (void*) &kCATransactionCompletionBlock;
	if (p != NULL) context[@"kCATransactionCompletionBlock"] = kCATransactionCompletionBlock;
	p = (void*) &kCATransactionAnimationTimingFunction;
	if (p != NULL) context[@"kCATransactionAnimationTimingFunction"] = kCATransactionAnimationTimingFunction;
	p = (void*) &kCATransactionAnimationDuration;
	if (p != NULL) context[@"kCATransactionAnimationDuration"] = kCATransactionAnimationDuration;
}
void load_QuartzCore_CATransaction_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
