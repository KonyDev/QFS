#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation CIImageAccumulator (Exports)
-(id) jsinitWithExtent: (CGRect) extent format: (CIFormat) format 
{
	id resultVal__;
	resultVal__ = [[self initWithExtent: extent format: format ] autorelease];
	return resultVal__;
}
-(id) jsinitWithExtent: (CGRect) extent format: (CIFormat) format colorSpace: (id) colorSpace 
{
	id resultVal__;
	resultVal__ = [[self initWithExtent: extent format: format colorSpace: colorSpace ] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([CIImageAccumulator class], @protocol(CIImageAccumulatorInstanceExports));
	class_addProtocol([CIImageAccumulator class], @protocol(CIImageAccumulatorClassExports));
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
void load_CoreImage_CIImageAccumulator_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
