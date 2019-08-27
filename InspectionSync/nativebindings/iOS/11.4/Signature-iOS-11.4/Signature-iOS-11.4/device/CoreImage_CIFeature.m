#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation CIQRCodeFeature (Exports)
-(id) jsinitWithCoder: (NSCoder *) aDecoder 
{
	id resultVal__;
	resultVal__ = [[self initWithCoder: aDecoder ] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([CIQRCodeFeature class], @protocol(CIQRCodeFeatureInstanceExports));
	class_addProtocol([CIQRCodeFeature class], @protocol(CIQRCodeFeatureClassExports));
	class_addProtocol([CITextFeature class], @protocol(CITextFeatureInstanceExports));
	class_addProtocol([CITextFeature class], @protocol(CITextFeatureClassExports));
	class_addProtocol([CIFaceFeature class], @protocol(CIFaceFeatureInstanceExports));
	class_addProtocol([CIFaceFeature class], @protocol(CIFaceFeatureClassExports));
	class_addProtocol([CIFeature class], @protocol(CIFeatureInstanceExports));
	class_addProtocol([CIFeature class], @protocol(CIFeatureClassExports));
	class_addProtocol([CIRectangleFeature class], @protocol(CIRectangleFeatureInstanceExports));
	class_addProtocol([CIRectangleFeature class], @protocol(CIRectangleFeatureClassExports));
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
	p = (void*) &CIFeatureTypeRectangle;
	if (p != NULL) context[@"CIFeatureTypeRectangle"] = CIFeatureTypeRectangle;
	p = (void*) &CIFeatureTypeFace;
	if (p != NULL) context[@"CIFeatureTypeFace"] = CIFeatureTypeFace;
	p = (void*) &CIFeatureTypeText;
	if (p != NULL) context[@"CIFeatureTypeText"] = CIFeatureTypeText;
	p = (void*) &CIFeatureTypeQRCode;
	if (p != NULL) context[@"CIFeatureTypeQRCode"] = CIFeatureTypeQRCode;
}
void load_CoreImage_CIFeature_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
