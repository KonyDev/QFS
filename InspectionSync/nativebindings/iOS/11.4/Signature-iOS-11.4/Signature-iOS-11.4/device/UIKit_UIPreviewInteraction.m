#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIPreviewInteraction (Exports)
-(id) jsinitWithView: (UIView *) view 
{
	id resultVal__;
	resultVal__ = [[self initWithView: view ] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([UIPreviewInteraction class], @protocol(UIPreviewInteractionInstanceExports));
	class_addProtocol([UIPreviewInteraction class], @protocol(UIPreviewInteractionClassExports));
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
void UIKit_UIPreviewInteractionProtocols()
{
	(void)@protocol(UIPreviewInteractionDelegate);
}
void load_UIKit_UIPreviewInteraction_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
