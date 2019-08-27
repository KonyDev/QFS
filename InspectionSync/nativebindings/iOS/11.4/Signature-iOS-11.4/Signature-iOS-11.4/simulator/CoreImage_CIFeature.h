#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_CoreImage_CIFeature_symbols(JSContext*);
@protocol CIQRCodeFeatureInstanceExports<JSExport, NSSecureCodingInstanceExports_, NSCopyingInstanceExports_>
@property (readonly) CGPoint topLeft;
@property (readonly) CGPoint bottomLeft;
@property (readonly) CGPoint bottomRight;
@property (readonly) CIQRCodeDescriptor * symbolDescriptor;
@property (readonly) CGRect bounds;
@property (readonly) CGPoint topRight;
@property (readonly) NSString * messageString;
@end
@protocol CIQRCodeFeatureClassExports<JSExport, NSSecureCodingClassExports_, NSCopyingClassExports_>
@end
@protocol CITextFeatureInstanceExports<JSExport>
@property (readonly) CGPoint topLeft;
@property (readonly) CGPoint bottomLeft;
@property (readonly) CGPoint bottomRight;
@property (readonly) NSArray * subFeatures;
@property (readonly) CGRect bounds;
@property (readonly) CGPoint topRight;
@end
@protocol CITextFeatureClassExports<JSExport>
@end
@protocol CIFaceFeatureInstanceExports<JSExport>
@property (readonly,assign) CGPoint rightEyePosition;
@property (readonly,assign) BOOL hasFaceAngle;
@property (readonly,assign) BOOL rightEyeClosed;
@property (readonly,assign) BOOL hasMouthPosition;
@property (readonly,assign) BOOL hasLeftEyePosition;
@property (readonly,assign) CGPoint leftEyePosition;
@property (readonly,assign) CGRect bounds;
@property (readonly,assign) BOOL hasTrackingFrameCount;
@property (readonly,assign) float faceAngle;
@property (readonly,assign) int trackingFrameCount;
@property (readonly,assign) BOOL leftEyeClosed;
@property (readonly,assign) int trackingID;
@property (readonly,assign) BOOL hasTrackingID;
@property (readonly,assign) BOOL hasRightEyePosition;
@property (readonly,assign) BOOL hasSmile;
@property (readonly,assign) CGPoint mouthPosition;
@end
@protocol CIFaceFeatureClassExports<JSExport>
@end
@protocol CIFeatureInstanceExports<JSExport>
@property (readonly,retain) NSString * type;
@property (readonly,assign) CGRect bounds;
@end
@protocol CIFeatureClassExports<JSExport>
@end
@protocol CIRectangleFeatureInstanceExports<JSExport>
@property (readonly) CGPoint topLeft;
@property (readonly) CGPoint bottomLeft;
@property (readonly) CGRect bounds;
@property (readonly) CGPoint bottomRight;
@property (readonly) CGPoint topRight;
@end
@protocol CIRectangleFeatureClassExports<JSExport>
@end
#pragma clang diagnostic pop