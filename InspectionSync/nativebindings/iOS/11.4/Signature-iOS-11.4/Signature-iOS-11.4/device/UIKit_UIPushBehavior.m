#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIPushBehavior (Exports)
-(id) jsinitWithItems: (NSArray *) items mode: (UIPushBehaviorMode) mode 
{
	id resultVal__;
	resultVal__ = [[self initWithItems: items mode: mode ] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([UIPushBehavior class], @protocol(UIPushBehaviorInstanceExports));
	class_addProtocol([UIPushBehavior class], @protocol(UIPushBehaviorClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UIPushBehaviorModeContinuous"] = @0;
	context[@"UIPushBehaviorModeInstantaneous"] = @1;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_UIKit_UIPushBehavior_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop