#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIDragPreview (Exports)
-(id) jsinitWithView: (UIView *) view 
{
	id resultVal__;
	resultVal__ = [[self initWithView: view ] autorelease];
	return resultVal__;
}
-(id) jsinitWithView: (UIView *) view parameters: (UIDragPreviewParameters *) parameters 
{
	id resultVal__;
	resultVal__ = [[self initWithView: view parameters: parameters ] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([UIDragPreview class], @protocol(UIDragPreviewInstanceExports));
	class_addProtocol([UIDragPreview class], @protocol(UIDragPreviewClassExports));
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
void load_UIKit_UIDragPreview_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
