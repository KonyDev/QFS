#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
static void addProtocols()
{
	class_addProtocol([UINotificationFeedbackGenerator class], @protocol(UINotificationFeedbackGeneratorInstanceExports));
	class_addProtocol([UINotificationFeedbackGenerator class], @protocol(UINotificationFeedbackGeneratorClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UINotificationFeedbackTypeSuccess"] = @0L;
	context[@"UINotificationFeedbackTypeWarning"] = @1L;
	context[@"UINotificationFeedbackTypeError"] = @2L;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_UIKit_UINotificationFeedbackGenerator_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
