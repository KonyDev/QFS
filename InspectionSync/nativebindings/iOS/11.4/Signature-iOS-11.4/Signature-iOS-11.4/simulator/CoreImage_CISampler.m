#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation CISampler (Exports)
-(id) jsinitWithImage: (CIImage *) im options: (NSDictionary *) dict 
{
	id resultVal__;
	resultVal__ = [[self initWithImage: im options: dict ] autorelease];
	return resultVal__;
}
-(id) jsinitWithImage: (CIImage *) im keysAndValues: (id) key0 arguments: (NSArray *) args 
{
	id resultVal__;
	if ([args count] == 0) resultVal__ = [[self initWithImage: im keysAndValues: key0 , nil] autorelease];
	else if ([args count] == 1) resultVal__ = [[self initWithImage: im keysAndValues: key0 , args[0], nil] autorelease];
	else if ([args count] == 2) resultVal__ = [[self initWithImage: im keysAndValues: key0 , args[0], args[1], nil] autorelease];
	else if ([args count] == 3) resultVal__ = [[self initWithImage: im keysAndValues: key0 , args[0], args[1], args[2], nil] autorelease];
	else if ([args count] == 4) resultVal__ = [[self initWithImage: im keysAndValues: key0 , args[0], args[1], args[2], args[3], nil] autorelease];
	else if ([args count] == 5) resultVal__ = [[self initWithImage: im keysAndValues: key0 , args[0], args[1], args[2], args[3], args[4], nil] autorelease];
	else if ([args count] == 6) resultVal__ = [[self initWithImage: im keysAndValues: key0 , args[0], args[1], args[2], args[3], args[4], args[5], nil] autorelease];
	else if ([args count] == 7) resultVal__ = [[self initWithImage: im keysAndValues: key0 , args[0], args[1], args[2], args[3], args[4], args[5], args[6], nil] autorelease];
	else if ([args count] == 8) resultVal__ = [[self initWithImage: im keysAndValues: key0 , args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], nil] autorelease];
	else if ([args count] == 9) resultVal__ = [[self initWithImage: im keysAndValues: key0 , args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8], nil] autorelease];
	else if ([args count] >= 10) resultVal__ = [[self initWithImage: im keysAndValues: key0 , args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8], args[9], nil] autorelease];
	return resultVal__;
}
-(id) jsinitWithImage: (CIImage *) im 
{
	id resultVal__;
	resultVal__ = [[self initWithImage: im ] autorelease];
	return resultVal__;
}
+(id) jssamplerWithImage: (CIImage *) im keysAndValues: (id) key0 arguments: (NSArray *) args 
{
	id resultVal__;
	if ([args count] == 0) resultVal__ = [self samplerWithImage: im keysAndValues: key0 , nil];
	else if ([args count] == 1) resultVal__ = [self samplerWithImage: im keysAndValues: key0 , args[0], nil];
	else if ([args count] == 2) resultVal__ = [self samplerWithImage: im keysAndValues: key0 , args[0], args[1], nil];
	else if ([args count] == 3) resultVal__ = [self samplerWithImage: im keysAndValues: key0 , args[0], args[1], args[2], nil];
	else if ([args count] == 4) resultVal__ = [self samplerWithImage: im keysAndValues: key0 , args[0], args[1], args[2], args[3], nil];
	else if ([args count] == 5) resultVal__ = [self samplerWithImage: im keysAndValues: key0 , args[0], args[1], args[2], args[3], args[4], nil];
	else if ([args count] == 6) resultVal__ = [self samplerWithImage: im keysAndValues: key0 , args[0], args[1], args[2], args[3], args[4], args[5], nil];
	else if ([args count] == 7) resultVal__ = [self samplerWithImage: im keysAndValues: key0 , args[0], args[1], args[2], args[3], args[4], args[5], args[6], nil];
	else if ([args count] == 8) resultVal__ = [self samplerWithImage: im keysAndValues: key0 , args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], nil];
	else if ([args count] == 9) resultVal__ = [self samplerWithImage: im keysAndValues: key0 , args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8], nil];
	else if ([args count] >= 10) resultVal__ = [self samplerWithImage: im keysAndValues: key0 , args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8], args[9], nil];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([CISampler class], @protocol(CISamplerInstanceExports));
	class_addProtocol([CISampler class], @protocol(CISamplerClassExports));
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
	p = (void*) &kCISamplerWrapClamp;
	if (p != NULL) context[@"kCISamplerWrapClamp"] = kCISamplerWrapClamp;
	p = (void*) &kCISamplerFilterMode;
	if (p != NULL) context[@"kCISamplerFilterMode"] = kCISamplerFilterMode;
	p = (void*) &kCISamplerWrapBlack;
	if (p != NULL) context[@"kCISamplerWrapBlack"] = kCISamplerWrapBlack;
	p = (void*) &kCISamplerFilterLinear;
	if (p != NULL) context[@"kCISamplerFilterLinear"] = kCISamplerFilterLinear;
	p = (void*) &kCISamplerColorSpace;
	if (p != NULL) context[@"kCISamplerColorSpace"] = kCISamplerColorSpace;
	p = (void*) &kCISamplerWrapMode;
	if (p != NULL) context[@"kCISamplerWrapMode"] = kCISamplerWrapMode;
	p = (void*) &kCISamplerFilterNearest;
	if (p != NULL) context[@"kCISamplerFilterNearest"] = kCISamplerFilterNearest;
	p = (void*) &kCISamplerAffineMatrix;
	if (p != NULL) context[@"kCISamplerAffineMatrix"] = kCISamplerAffineMatrix;
}
void load_CoreImage_CISampler_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
