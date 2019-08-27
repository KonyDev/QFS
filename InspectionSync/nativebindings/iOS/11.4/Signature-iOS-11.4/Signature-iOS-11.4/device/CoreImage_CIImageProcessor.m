#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation CIImageProcessorKernel (Exports)
+(BOOL) jsprocessWithInputs: (NSArray *) inputs arguments: (NSDictionary *) arguments output: (id) output error: (JSValue *) error 
{
	NSError* error_ = nil;
	BOOL resultVal__;
	resultVal__ = [self processWithInputs: inputs arguments: arguments output: output error: &error_ ];
	if (error_ && [error isObject]) {
		error[@"error"] = error_;
	}
	return resultVal__;
}
+(CIImage *) jsapplyWithExtent: (CGRect) extent inputs: (NSArray *) inputs arguments: (NSDictionary *) args error: (JSValue *) error 
{
	NSError* error_ = nil;
	CIImage * resultVal__;
	resultVal__ = [self applyWithExtent: extent inputs: inputs arguments: args error: &error_ ];
	if (error_ && [error isObject]) {
		error[@"error"] = error_;
	}
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([CIImageProcessorKernel class], @protocol(CIImageProcessorKernelInstanceExports));
	class_addProtocol([CIImageProcessorKernel class], @protocol(CIImageProcessorKernelClassExports));
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
void CoreImage_CIImageProcessorProtocols()
{
	(void)@protocol(CIImageProcessorInput);
	(void)@protocol(CIImageProcessorOutput);
}
void load_CoreImage_CIImageProcessor_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
