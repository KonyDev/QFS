#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UITextDragPreviewRenderer (Exports)
-(id) jsinitWithLayoutManager: (NSLayoutManager *) layoutManager range: (NSRange) range 
{
	id resultVal__;
	resultVal__ = [[self initWithLayoutManager: layoutManager range: range ] autorelease];
	return resultVal__;
}
-(id) jsinitWithLayoutManager: (NSLayoutManager *) layoutManager range: (NSRange) range unifyRects: (BOOL) unifyRects 
{
	id resultVal__;
	resultVal__ = [[self initWithLayoutManager: layoutManager range: range unifyRects: unifyRects ] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([UITextDragPreviewRenderer class], @protocol(UITextDragPreviewRendererInstanceExports));
	class_addProtocol([UITextDragPreviewRenderer class], @protocol(UITextDragPreviewRendererClassExports));
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
void load_UIKit_UITextDragPreviewRenderer_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
