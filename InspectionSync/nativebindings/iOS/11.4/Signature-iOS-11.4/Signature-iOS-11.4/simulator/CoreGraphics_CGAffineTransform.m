#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation JSValue (CoreGraphics_CGAffineTransform)
+(JSValue*) valueWithCGAffineTransform: (CGAffineTransform) s inContext: (JSContext*) context {
	return [JSValue valueWithObject: @{
		@"a": @(s.a),
		@"b": @(s.b),
		@"c": @(s.c),
		@"d": @(s.d),
		@"tx": @(s.tx),
		@"ty": @(s.ty),
	} inContext: context];
}
-(CGAffineTransform) toCGAffineTransform {
	return (CGAffineTransform) {
		(CGFloat) [self[@"a"] toDouble],
		(CGFloat) [self[@"b"] toDouble],
		(CGFloat) [self[@"c"] toDouble],
		(CGFloat) [self[@"d"] toDouble],
		(CGFloat) [self[@"tx"] toDouble],
		(CGFloat) [self[@"ty"] toDouble],
	};
}
@end
static void addProtocols()
{
}
static void registerCFunctions(JSContext* context)
{
	context[@"CGAffineTransformMakeRotation"] = ^CGAffineTransform(CGFloat arg0) {
		return CGAffineTransformMakeRotation(arg0);
	};
	context[@"CGPointApplyAffineTransform"] = ^CGPoint(CGPoint arg0, CGAffineTransform arg1) {
		return CGPointApplyAffineTransform(arg0, arg1);
	};
	context[@"CGAffineTransformIsIdentity"] = ^_Bool(CGAffineTransform arg0) {
		return CGAffineTransformIsIdentity(arg0);
	};
	context[@"CGAffineTransformMake"] = ^CGAffineTransform(CGFloat arg0, CGFloat arg1, CGFloat arg2, CGFloat arg3, CGFloat arg4, CGFloat arg5) {
		return CGAffineTransformMake(arg0, arg1, arg2, arg3, arg4, arg5);
	};
	context[@"CGAffineTransformRotate"] = ^CGAffineTransform(CGAffineTransform arg0, CGFloat arg1) {
		return CGAffineTransformRotate(arg0, arg1);
	};
	context[@"__CGPointApplyAffineTransform"] = ^CGPoint(CGPoint arg0, CGAffineTransform arg1) {
		return __CGPointApplyAffineTransform(arg0, arg1);
	};
	context[@"CGAffineTransformTranslate"] = ^CGAffineTransform(CGAffineTransform arg0, CGFloat arg1, CGFloat arg2) {
		return CGAffineTransformTranslate(arg0, arg1, arg2);
	};
	context[@"CGAffineTransformMakeTranslation"] = ^CGAffineTransform(CGFloat arg0, CGFloat arg1) {
		return CGAffineTransformMakeTranslation(arg0, arg1);
	};
	context[@"CGSizeApplyAffineTransform"] = ^CGSize(CGSize arg0, CGAffineTransform arg1) {
		return CGSizeApplyAffineTransform(arg0, arg1);
	};
	context[@"__CGSizeApplyAffineTransform"] = ^CGSize(CGSize arg0, CGAffineTransform arg1) {
		return __CGSizeApplyAffineTransform(arg0, arg1);
	};
	context[@"__CGAffineTransformMake"] = ^CGAffineTransform(CGFloat arg0, CGFloat arg1, CGFloat arg2, CGFloat arg3, CGFloat arg4, CGFloat arg5) {
		return __CGAffineTransformMake(arg0, arg1, arg2, arg3, arg4, arg5);
	};
	context[@"CGAffineTransformEqualToTransform"] = ^_Bool(CGAffineTransform arg0, CGAffineTransform arg1) {
		return CGAffineTransformEqualToTransform(arg0, arg1);
	};
	context[@"CGAffineTransformInvert"] = ^CGAffineTransform(CGAffineTransform arg0) {
		return CGAffineTransformInvert(arg0);
	};
	context[@"CGAffineTransformMakeScale"] = ^CGAffineTransform(CGFloat arg0, CGFloat arg1) {
		return CGAffineTransformMakeScale(arg0, arg1);
	};
	context[@"CGRectApplyAffineTransform"] = ^CGRect(CGRect arg0, CGAffineTransform arg1) {
		return CGRectApplyAffineTransform(arg0, arg1);
	};
	context[@"CGAffineTransformConcat"] = ^CGAffineTransform(CGAffineTransform arg0, CGAffineTransform arg1) {
		return CGAffineTransformConcat(arg0, arg1);
	};
	context[@"CGAffineTransformScale"] = ^CGAffineTransform(CGAffineTransform arg0, CGFloat arg1, CGFloat arg2) {
		return CGAffineTransformScale(arg0, arg1, arg2);
	};
}
static void registerEnumConstants(JSContext* context)
{
}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &CGAffineTransformIdentity;
	if (p != NULL) context[@"CGAffineTransformIdentity"] = [JSValue valueWithCGAffineTransform: CGAffineTransformIdentity inContext: context];
}
void load_CoreGraphics_CGAffineTransform_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
