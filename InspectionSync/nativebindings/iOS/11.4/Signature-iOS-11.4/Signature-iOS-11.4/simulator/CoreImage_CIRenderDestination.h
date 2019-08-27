#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_CoreImage_CIRenderDestination_symbols(JSContext*);
@protocol CIRenderTaskInstanceExports<JSExport>
JSExportAs(waitUntilCompletedAndReturnError,
-(CIRenderInfo *) jswaitUntilCompletedAndReturnError: (JSValue *) error );
@end
@protocol CIRenderTaskClassExports<JSExport>
@end
@protocol CIRenderDestinationInstanceExports<JSExport>
@property (nonatomic) id colorSpace;
@property (getter=isDithered) BOOL dithered;
@property (retain,nonatomic) CIBlendKernel * blendKernel;
@property (getter=isFlipped) BOOL flipped;
@property (readonly) NSUInteger width;
@property () CIRenderDestinationAlphaMode alphaMode;
@property (readonly) NSUInteger height;
@property (getter=isClamped) BOOL clamped;
@property () BOOL blendsInDestinationColorSpace;
JSExportAs(initWithPixelBuffer,
-(id) jsinitWithPixelBuffer: (id) pixelBuffer );
JSExportAs(initWithMTLTextureCommandBuffer,
-(id) jsinitWithMTLTexture: (id) texture commandBuffer: (id) commandBuffer );
JSExportAs(initWithWidthHeightPixelFormatCommandBufferMtlTextureProvider,
-(id) jsinitWithWidth: (NSUInteger) width height: (NSUInteger) height pixelFormat: (MTLPixelFormat) pixelFormat commandBuffer: (id) commandBuffer mtlTextureProvider: (JSValue *) block );
JSExportAs(initWithGLTextureTargetWidthHeight,
-(id) jsinitWithGLTexture: (unsigned int) texture target: (unsigned int) target width: (NSUInteger) width height: (NSUInteger) height );
@end
@protocol CIRenderDestinationClassExports<JSExport>
@end
@protocol CIContextCIRenderDestinationCategoryInstanceExports<JSExport>
JSExportAs(startTaskToRenderToDestinationError,
-(CIRenderTask *) jsstartTaskToRender: (CIImage *) image toDestination: (CIRenderDestination *) destination error: (JSValue *) error );
JSExportAs(startTaskToRenderFromRectToDestinationAtPointError,
-(CIRenderTask *) jsstartTaskToRender: (CIImage *) image fromRect: (CGRect) fromRect toDestination: (CIRenderDestination *) destination atPoint: (CGPoint) atPoint error: (JSValue *) error );
JSExportAs(startTaskToClearError,
-(CIRenderTask *) jsstartTaskToClear: (CIRenderDestination *) destination error: (JSValue *) error );
JSExportAs(prepareRenderFromRectToDestinationAtPointError,
-(BOOL) jsprepareRender: (CIImage *) image fromRect: (CGRect) fromRect toDestination: (CIRenderDestination *) destination atPoint: (CGPoint) atPoint error: (JSValue *) error );
@end
@protocol CIContextCIRenderDestinationCategoryClassExports<JSExport>
@end
@protocol CIRenderInfoInstanceExports<JSExport>
@property (readonly) NSInteger passCount;
@property (readonly) NSInteger pixelsProcessed;
@property (readonly) NSTimeInterval kernelExecutionTime;
@end
@protocol CIRenderInfoClassExports<JSExport>
@end
#pragma clang diagnostic pop