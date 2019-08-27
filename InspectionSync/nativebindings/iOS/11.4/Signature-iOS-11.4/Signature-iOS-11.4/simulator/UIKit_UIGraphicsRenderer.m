#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIGraphicsRenderer (Exports)
-(id) jsinitWithBounds: (CGRect) bounds 
{
	id resultVal__;
	resultVal__ = [[self initWithBounds: bounds ] autorelease];
	return resultVal__;
}
-(id) jsinitWithBounds: (CGRect) bounds format: (UIGraphicsRendererFormat *) format 
{
	id resultVal__;
	resultVal__ = [[self initWithBounds: bounds format: format ] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([UIGraphicsRenderer class], @protocol(UIGraphicsRendererInstanceExports));
	class_addProtocol([UIGraphicsRenderer class], @protocol(UIGraphicsRendererClassExports));
	class_addProtocol([UIGraphicsRendererContext class], @protocol(UIGraphicsRendererContextInstanceExports));
	class_addProtocol([UIGraphicsRendererContext class], @protocol(UIGraphicsRendererContextClassExports));
	class_addProtocol([UIGraphicsRendererFormat class], @protocol(UIGraphicsRendererFormatInstanceExports));
	class_addProtocol([UIGraphicsRendererFormat class], @protocol(UIGraphicsRendererFormatClassExports));
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
void load_UIKit_UIGraphicsRenderer_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
