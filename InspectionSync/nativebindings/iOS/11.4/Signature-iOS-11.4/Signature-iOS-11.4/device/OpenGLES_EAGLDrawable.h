#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_OpenGLES_EAGLDrawable_symbols(JSContext*);
@protocol EAGLContextEAGLContextDrawableAdditionsCategoryInstanceExports<JSExport>
-(BOOL) presentRenderbuffer: (NSUInteger) target atTime: (CFTimeInterval) presentationTime ;
-(BOOL) renderbufferStorage: (NSUInteger) target fromDrawable: (id) drawable ;
-(BOOL) presentRenderbuffer: (NSUInteger) target ;
-(BOOL) presentRenderbuffer: (NSUInteger) target afterMinimumDuration: (CFTimeInterval) duration ;
@end
@protocol EAGLContextEAGLContextDrawableAdditionsCategoryClassExports<JSExport>
@end
@protocol EAGLDrawableInstanceExports_<JSExport>
@property (copy) NSDictionary * drawableProperties;
@end
@protocol EAGLDrawableClassExports_<JSExport>
@end
#pragma clang diagnostic pop