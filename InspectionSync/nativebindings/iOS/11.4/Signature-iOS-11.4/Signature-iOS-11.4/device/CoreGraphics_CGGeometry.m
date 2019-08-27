#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation JSValue (CoreGraphics_CGGeometry)
+(JSValue*) valueWithCGVector: (CGVector) s inContext: (JSContext*) context {
	return [JSValue valueWithObject: @{
		@"dx": @(s.dx),
		@"dy": @(s.dy),
	} inContext: context];
}
-(CGVector) toCGVector {
	return (CGVector) {
		(CGFloat) [self[@"dx"] toDouble],
		(CGFloat) [self[@"dy"] toDouble],
	};
}
@end
static void addProtocols()
{
}
static void registerCFunctions(JSContext* context)
{
	context[@"CGSizeEqualToSize"] = ^_Bool(CGSize arg0, CGSize arg1) {
		return CGSizeEqualToSize(arg0, arg1);
	};
	context[@"CGRectStandardize"] = ^CGRect(CGRect arg0) {
		return CGRectStandardize(arg0);
	};
	context[@"CGRectIntegral"] = ^CGRect(CGRect arg0) {
		return CGRectIntegral(arg0);
	};
	context[@"CGRectContainsPoint"] = ^_Bool(CGRect arg0, CGPoint arg1) {
		return CGRectContainsPoint(arg0, arg1);
	};
	context[@"CGRectGetMaxY"] = ^CGFloat(CGRect arg0) {
		return CGRectGetMaxY(arg0);
	};
	context[@"CGRectGetMaxX"] = ^CGFloat(CGRect arg0) {
		return CGRectGetMaxX(arg0);
	};
	context[@"__CGPointEqualToPoint"] = ^_Bool(CGPoint arg0, CGPoint arg1) {
		return __CGPointEqualToPoint(arg0, arg1);
	};
	context[@"CGRectIsEmpty"] = ^_Bool(CGRect arg0) {
		return CGRectIsEmpty(arg0);
	};
	context[@"CGRectGetMidY"] = ^CGFloat(CGRect arg0) {
		return CGRectGetMidY(arg0);
	};
	context[@"CGRectGetMidX"] = ^CGFloat(CGRect arg0) {
		return CGRectGetMidX(arg0);
	};
	context[@"CGRectIntersection"] = ^CGRect(CGRect arg0, CGRect arg1) {
		return CGRectIntersection(arg0, arg1);
	};
	context[@"CGRectContainsRect"] = ^_Bool(CGRect arg0, CGRect arg1) {
		return CGRectContainsRect(arg0, arg1);
	};
	context[@"CGRectIntersectsRect"] = ^_Bool(CGRect arg0, CGRect arg1) {
		return CGRectIntersectsRect(arg0, arg1);
	};
	context[@"CGRectOffset"] = ^CGRect(CGRect arg0, CGFloat arg1, CGFloat arg2) {
		return CGRectOffset(arg0, arg1, arg2);
	};
	context[@"CGRectGetHeight"] = ^CGFloat(CGRect arg0) {
		return CGRectGetHeight(arg0);
	};
	context[@"CGSizeCreateDictionaryRepresentation"] = ^id(CGSize arg0) {
		return CGSizeCreateDictionaryRepresentation(arg0);
	};
	context[@"CGPointMake"] = ^CGPoint(CGFloat arg0, CGFloat arg1) {
		return CGPointMake(arg0, arg1);
	};
	context[@"CGVectorMake"] = ^CGVector(CGFloat arg0, CGFloat arg1) {
		return CGVectorMake(arg0, arg1);
	};
	context[@"CGPointEqualToPoint"] = ^_Bool(CGPoint arg0, CGPoint arg1) {
		return CGPointEqualToPoint(arg0, arg1);
	};
	context[@"CGRectIsNull"] = ^_Bool(CGRect arg0) {
		return CGRectIsNull(arg0);
	};
	context[@"__CGSizeEqualToSize"] = ^_Bool(CGSize arg0, CGSize arg1) {
		return __CGSizeEqualToSize(arg0, arg1);
	};
	context[@"CGRectInset"] = ^CGRect(CGRect arg0, CGFloat arg1, CGFloat arg2) {
		return CGRectInset(arg0, arg1, arg2);
	};
	context[@"CGRectIsInfinite"] = ^_Bool(CGRect arg0) {
		return CGRectIsInfinite(arg0);
	};
	context[@"CGRectGetMinY"] = ^CGFloat(CGRect arg0) {
		return CGRectGetMinY(arg0);
	};
	context[@"CGRectGetMinX"] = ^CGFloat(CGRect arg0) {
		return CGRectGetMinX(arg0);
	};
	context[@"CGRectMake"] = ^CGRect(CGFloat arg0, CGFloat arg1, CGFloat arg2, CGFloat arg3) {
		return CGRectMake(arg0, arg1, arg2, arg3);
	};
	context[@"CGSizeMake"] = ^CGSize(CGFloat arg0, CGFloat arg1) {
		return CGSizeMake(arg0, arg1);
	};
	context[@"CGRectEqualToRect"] = ^_Bool(CGRect arg0, CGRect arg1) {
		return CGRectEqualToRect(arg0, arg1);
	};
	context[@"CGRectCreateDictionaryRepresentation"] = ^id(CGRect arg0) {
		return CGRectCreateDictionaryRepresentation(arg0);
	};
	context[@"CGRectUnion"] = ^CGRect(CGRect arg0, CGRect arg1) {
		return CGRectUnion(arg0, arg1);
	};
	context[@"CGPointCreateDictionaryRepresentation"] = ^id(CGPoint arg0) {
		return CGPointCreateDictionaryRepresentation(arg0);
	};
	context[@"CGRectGetWidth"] = ^CGFloat(CGRect arg0) {
		return CGRectGetWidth(arg0);
	};
}
static void registerEnumConstants(JSContext* context)
{
	context[@"CGRectMinXEdge"] = @0U;
	context[@"CGRectMinYEdge"] = @1U;
	context[@"CGRectMaxXEdge"] = @2U;
	context[@"CGRectMaxYEdge"] = @3U;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &CGPointZero;
	if (p != NULL) context[@"CGPointZero"] = [JSValue valueWithPoint: CGPointZero inContext: context];
	p = (void*) &CGRectZero;
	if (p != NULL) context[@"CGRectZero"] = [JSValue valueWithRect: CGRectZero inContext: context];
	p = (void*) &CGSizeZero;
	if (p != NULL) context[@"CGSizeZero"] = [JSValue valueWithSize: CGSizeZero inContext: context];
	p = (void*) &CGRectNull;
	if (p != NULL) context[@"CGRectNull"] = [JSValue valueWithRect: CGRectNull inContext: context];
	p = (void*) &CGRectInfinite;
	if (p != NULL) context[@"CGRectInfinite"] = [JSValue valueWithRect: CGRectInfinite inContext: context];
}
void load_CoreGraphics_CGGeometry_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
