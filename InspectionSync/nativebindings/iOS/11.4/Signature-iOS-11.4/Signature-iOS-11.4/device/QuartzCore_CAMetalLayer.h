#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_QuartzCore_CAMetalLayer_symbols(JSContext*);
@protocol CAMetalLayerInstanceExports<JSExport>
@property () CGSize drawableSize;
@property () BOOL allowsNextDrawableTimeout;
@property () BOOL presentsWithTransaction;
@property () BOOL framebufferOnly;
@property () NSUInteger maximumDrawableCount;
@property () MTLPixelFormat pixelFormat;
@property (retain) id device;
-(id) nextDrawable;
@end
@protocol CAMetalLayerClassExports<JSExport>
@end
@protocol CAMetalDrawableInstanceExports_<JSExport, MTLDrawableInstanceExports_>
@property (readonly) CAMetalLayer * layer;
@property (readonly) id texture;
@end
@protocol CAMetalDrawableClassExports_<JSExport, MTLDrawableClassExports_>
@end
#pragma clang diagnostic pop