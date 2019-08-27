#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIDragPreviewParameters (Exports)
-(id) jsinitWithTextLineRects: (NSArray *) textLineRects 
{
	id resultVal__;
	resultVal__ = [[self initWithTextLineRects: textLineRects ] autorelease];
	return resultVal__;
}
-(id) jsinit
{
	id resultVal__;
	resultVal__ = [[self init] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([UIDragPreviewParameters class], @protocol(UIDragPreviewParametersInstanceExports));
	class_addProtocol([UIDragPreviewParameters class], @protocol(UIDragPreviewParametersClassExports));
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
void load_UIKit_UIDragPreviewParameters_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
