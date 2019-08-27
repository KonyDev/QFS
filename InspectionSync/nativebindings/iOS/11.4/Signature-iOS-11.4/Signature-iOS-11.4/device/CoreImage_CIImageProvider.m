#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation CIImage (CIImageCIImageProviderCategoryExports)
-(id) jsinitWithImageProvider: (id) p size: (size_t) width : (size_t) height format: (CIFormat) f colorSpace: (id) cs options: (NSDictionary *) options 
{
	id resultVal__;
	resultVal__ = [[self initWithImageProvider: p size: width : height format: f colorSpace: cs options: options ] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([CIImage class], @protocol(CIImageCIImageProviderCategoryInstanceExports));
	class_addProtocol([CIImage class], @protocol(CIImageCIImageProviderCategoryClassExports));
	class_addProtocol([NSObject class], @protocol(NSObjectCIImageProviderCategoryInstanceExports));
	class_addProtocol([NSObject class], @protocol(NSObjectCIImageProviderCategoryClassExports));
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
	p = (void*) &kCIImageProviderTileSize;
	if (p != NULL) context[@"kCIImageProviderTileSize"] = kCIImageProviderTileSize;
	p = (void*) &kCIImageProviderUserInfo;
	if (p != NULL) context[@"kCIImageProviderUserInfo"] = kCIImageProviderUserInfo;
}
void load_CoreImage_CIImageProvider_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
