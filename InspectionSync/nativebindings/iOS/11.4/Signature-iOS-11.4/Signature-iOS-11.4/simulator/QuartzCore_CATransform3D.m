#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation JSValue (QuartzCore_CATransform3D)
+(JSValue*) valueWithCATransform3D: (CATransform3D) s inContext: (JSContext*) context {
	return [JSValue valueWithObject: @{
		@"m11": @(s.m11),
		@"m12": @(s.m12),
		@"m13": @(s.m13),
		@"m14": @(s.m14),
		@"m21": @(s.m21),
		@"m22": @(s.m22),
		@"m23": @(s.m23),
		@"m24": @(s.m24),
		@"m31": @(s.m31),
		@"m32": @(s.m32),
		@"m33": @(s.m33),
		@"m34": @(s.m34),
		@"m41": @(s.m41),
		@"m42": @(s.m42),
		@"m43": @(s.m43),
		@"m44": @(s.m44),
	} inContext: context];
}
-(CATransform3D) toCATransform3D {
	return (CATransform3D) {
		(CGFloat) [self[@"m11"] toDouble],
		(CGFloat) [self[@"m12"] toDouble],
		(CGFloat) [self[@"m13"] toDouble],
		(CGFloat) [self[@"m14"] toDouble],
		(CGFloat) [self[@"m21"] toDouble],
		(CGFloat) [self[@"m22"] toDouble],
		(CGFloat) [self[@"m23"] toDouble],
		(CGFloat) [self[@"m24"] toDouble],
		(CGFloat) [self[@"m31"] toDouble],
		(CGFloat) [self[@"m32"] toDouble],
		(CGFloat) [self[@"m33"] toDouble],
		(CGFloat) [self[@"m34"] toDouble],
		(CGFloat) [self[@"m41"] toDouble],
		(CGFloat) [self[@"m42"] toDouble],
		(CGFloat) [self[@"m43"] toDouble],
		(CGFloat) [self[@"m44"] toDouble],
	};
}
@end
static void addProtocols()
{
	class_addProtocol([NSValue class], @protocol(NSValueCATransform3DAdditionsCategoryInstanceExports));
	class_addProtocol([NSValue class], @protocol(NSValueCATransform3DAdditionsCategoryClassExports));
}
static void registerCFunctions(JSContext* context)
{
	context[@"CATransform3DMakeTranslation"] = ^CATransform3D(CGFloat arg0, CGFloat arg1, CGFloat arg2) {
		return CATransform3DMakeTranslation(arg0, arg1, arg2);
	};
	context[@"CATransform3DIsAffine"] = ^_Bool(CATransform3D arg0) {
		return CATransform3DIsAffine(arg0);
	};
	context[@"CATransform3DGetAffineTransform"] = ^CGAffineTransform(CATransform3D arg0) {
		return CATransform3DGetAffineTransform(arg0);
	};
	context[@"CATransform3DRotate"] = ^CATransform3D(CATransform3D arg0, CGFloat arg1, CGFloat arg2, CGFloat arg3, CGFloat arg4) {
		return CATransform3DRotate(arg0, arg1, arg2, arg3, arg4);
	};
	context[@"CATransform3DConcat"] = ^CATransform3D(CATransform3D arg0, CATransform3D arg1) {
		return CATransform3DConcat(arg0, arg1);
	};
	context[@"CATransform3DMakeAffineTransform"] = ^CATransform3D(CGAffineTransform arg0) {
		return CATransform3DMakeAffineTransform(arg0);
	};
	context[@"CATransform3DInvert"] = ^CATransform3D(CATransform3D arg0) {
		return CATransform3DInvert(arg0);
	};
	context[@"CATransform3DScale"] = ^CATransform3D(CATransform3D arg0, CGFloat arg1, CGFloat arg2, CGFloat arg3) {
		return CATransform3DScale(arg0, arg1, arg2, arg3);
	};
	context[@"CATransform3DMakeScale"] = ^CATransform3D(CGFloat arg0, CGFloat arg1, CGFloat arg2) {
		return CATransform3DMakeScale(arg0, arg1, arg2);
	};
	context[@"CATransform3DIsIdentity"] = ^_Bool(CATransform3D arg0) {
		return CATransform3DIsIdentity(arg0);
	};
	context[@"CATransform3DMakeRotation"] = ^CATransform3D(CGFloat arg0, CGFloat arg1, CGFloat arg2, CGFloat arg3) {
		return CATransform3DMakeRotation(arg0, arg1, arg2, arg3);
	};
	context[@"CATransform3DEqualToTransform"] = ^_Bool(CATransform3D arg0, CATransform3D arg1) {
		return CATransform3DEqualToTransform(arg0, arg1);
	};
	context[@"CATransform3DTranslate"] = ^CATransform3D(CATransform3D arg0, CGFloat arg1, CGFloat arg2, CGFloat arg3) {
		return CATransform3DTranslate(arg0, arg1, arg2, arg3);
	};
}
static void registerEnumConstants(JSContext* context)
{
}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &CATransform3DIdentity;
	if (p != NULL) context[@"CATransform3DIdentity"] = [JSValue valueWithCATransform3D: CATransform3DIdentity inContext: context];
}
void load_QuartzCore_CATransform3D_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
