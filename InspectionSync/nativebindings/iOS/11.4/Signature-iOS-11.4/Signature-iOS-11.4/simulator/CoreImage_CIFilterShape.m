#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation CIFilterShape (Exports)
-(id) jsinitWithRect: (CGRect) r 
{
	id resultVal__;
	resultVal__ = [[self initWithRect: r ] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([CIFilterShape class], @protocol(CIFilterShapeInstanceExports));
	class_addProtocol([CIFilterShape class], @protocol(CIFilterShapeClassExports));
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
void load_CoreImage_CIFilterShape_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
